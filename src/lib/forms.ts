export type FormName = "cv" | "apply" | "empresa" | "contacto";
export type Errors = Partial<Record<string, string>>;

// Backend de formularios. Con NEXT_PUBLIC_API_BASE vacío, los envíos se simulan.
const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "";
const ENDPOINTS: Record<FormName, string> = {
  cv: "/candidatos", // POST multipart: datos + archivo "cv"
  apply: "/postulaciones", // POST multipart: datos + "cv" + "busqueda_id"
  empresa: "/solicitudes-empresa",
  contacto: "/contacto",
};

const REQ: Record<FormName, string[]> = {
  cv: ["nombre", "email", "telefono", "ciudad", "area", "puesto", "experiencia", "archivo", "consentimiento"],
  apply: ["nombre", "email", "telefono", "ciudad", "archivo", "consentimiento"],
  empresa: ["empresa", "contacto", "cargo", "telefono", "email", "puesto", "vacantes", "ubicacion", "descripcion"],
  contacto: ["nombre", "email", "mensaje"],
};

export const MSG = {
  requerido: "Este campo es obligatorio.",
  email: "Ingresá un correo electrónico válido.",
  telefono: "Ingresá un número de teléfono válido.",
  archivo: "Adjuntá tu CV en formato PDF.",
  tipo: "El archivo debe ser un PDF.",
  peso: "El archivo supera el máximo de 5 MB.",
  consentimiento: "Necesitamos tu consentimiento para continuar.",
  vacantes: "Indicá un número mayor o igual a 1.",
  linkedin: "Ingresá un enlace de LinkedIn válido (linkedin.com/in/…).",
  general: "No pudimos enviar tus datos. Revisá tu conexión e intentá de nuevo.",
};

export const MAX_MB = 5;
const RE_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validar(n: FormName, fd: FormData, tieneArchivo: boolean): Errors {
  const e: Errors = {};
  for (const k of REQ[n]) {
    if (k === "archivo") {
      if (!tieneArchivo) e.archivo = MSG.archivo;
      continue;
    }
    if (k === "consentimiento") {
      if (!fd.get("consentimiento")) e.consentimiento = MSG.consentimiento;
      continue;
    }
    const v = String(fd.get(k) ?? "").trim();
    if (!v) e[k] = MSG.requerido;
    else if (k === "email" && !RE_EMAIL.test(v)) e[k] = MSG.email;
    else if (k === "telefono" && v.replace(/\D/g, "").length < 7) e[k] = MSG.telefono;
    else if (k === "vacantes" && !(parseInt(v, 10) >= 1)) e[k] = MSG.vacantes;
  }
  const li = String(fd.get("linkedin") ?? "").trim();
  if (li && !/linkedin\.com\//i.test(li)) e.linkedin = MSG.linkedin;
  return e;
}

export function validarArchivo(file: File): string | null {
  const esPdf = file.type === "application/pdf" || /\.pdf$/i.test(file.name);
  if (!esPdf) return MSG.tipo;
  if (file.size > MAX_MB * 1048576) return MSG.peso;
  return null;
}

export function tam(b: number) {
  return b < 1048576 ? `${Math.max(1, Math.round(b / 1024))} KB` : `${(b / 1048576).toFixed(1).replace(".", ",")} MB`;
}

// Usa XHR para tener progreso real de subida cuando hay backend configurado.
export function enviar(n: FormName, fd: FormData, onProgress: (p: number) => void, signal: AbortSignal): Promise<void> {
  if (API_BASE) {
    return new Promise((res, rej) => {
      const x = new XMLHttpRequest();
      x.open("POST", API_BASE + ENDPOINTS[n]);
      x.upload.onprogress = (ev) => {
        if (ev.lengthComputable) onProgress((ev.loaded / ev.total) * 100);
      };
      x.onload = () => (x.status >= 200 && x.status < 300 ? res() : rej(new Error(String(x.status))));
      x.onerror = () => rej(new Error("network"));
      signal.addEventListener("abort", () => x.abort());
      x.send(fd);
    });
  }
  return new Promise((res) => {
    let p = 0;
    const t = setInterval(() => {
      p += 7 + Math.random() * 13;
      if (p >= 100) {
        clearInterval(t);
        onProgress(100);
        setTimeout(res, 350);
      } else onProgress(p);
    }, 140);
    signal.addEventListener("abort", () => clearInterval(t));
  });
}
