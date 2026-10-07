export type Busqueda = {
  id: string;
  puesto: string;
  empresa: string;
  area: string;
  ubicacion: string;
  modalidad: string;
  jornada: string;
  contratacion: string;
  fecha: string;
  resumen: string;
  descripcion: string;
  responsabilidades: string[];
  requisitos: string[];
  valorara: string[];
  beneficios: string[];
  info: string;
};

// DATOS DE EJEMPLO — reemplazar por las búsquedas reales (backend / panel de admin).
export const BUSQUEDAS: Busqueda[] = [
  {
    id: "ejemplo-001", puesto: "Auxiliar Administrativa/o Junior", empresa: "Empresa del sector comercial", area: "Administración",
    ubicacion: "Ciudad del Este", modalidad: "Presencial", jornada: "Tiempo completo", contratacion: "Relación de dependencia",
    fecha: "2026-10-05",
    resumen: "Apoyo en tareas administrativas, carga de datos y atención a proveedores.",
    descripcion: "Buscamos una persona organizada y proactiva para sumarse al área administrativa, brindando apoyo en tareas diarias de gestión documental, carga de datos y seguimiento a proveedores.",
    responsabilidades: ["Carga y control de facturas y documentos", "Archivo y organización de documentación", "Atención telefónica y por correo a proveedores", "Apoyo al equipo administrativo en tareas generales"],
    requisitos: ["Bachiller concluido", "Manejo de Excel a nivel usuario", "Buena redacción y ortografía", "Disponibilidad para trabajar en Ciudad del Este"],
    valorara: ["Estudios en curso en Administración o Contabilidad", "Experiencia previa en puestos similares"],
    beneficios: ["Salario acorde al mercado", "IPS", "Capacitación inicial"],
    info: "Los datos de la empresa se informarán a los candidatos preseleccionados.",
  },
  {
    id: "ejemplo-002", puesto: "Vendedor/a Comercial", empresa: "Empresa de distribución", area: "Ventas",
    ubicacion: "Ciudad del Este y alrededores", modalidad: "Presencial", jornada: "Tiempo completo", contratacion: "Relación de dependencia",
    fecha: "2026-10-02",
    resumen: "Visita a clientes, gestión de cartera y cumplimiento de objetivos comerciales.",
    descripcion: "Incorporamos un perfil comercial para la atención y ampliación de cartera de clientes en la zona de Alto Paraná.",
    responsabilidades: ["Visitar clientes actuales y potenciales", "Elaborar presupuestos y cerrar ventas", "Hacer seguimiento de pedidos y cobranzas", "Reportar resultados semanales"],
    requisitos: ["Experiencia mínima de 1 año en ventas", "Orientación a resultados", "Licencia de conducir vigente"],
    valorara: ["Movilidad propia", "Conocimiento de la zona"],
    beneficios: ["Sueldo fijo más comisiones", "IPS"],
    info: "Proceso de selección con entrevista presencial.",
  },
  {
    id: "ejemplo-003", puesto: "Recepcionista bilingüe (español – portugués)", empresa: "Empresa de servicios", area: "Atención al cliente",
    ubicacion: "Ciudad del Este", modalidad: "Presencial", jornada: "Turno mañana", contratacion: "Relación de dependencia",
    fecha: "2026-09-29",
    resumen: "Recepción de clientes, agenda y atención telefónica en español y portugués.",
    descripcion: "Buscamos una persona con excelente trato para recibir a clientes y visitantes, gestionar la agenda y brindar atención en español y portugués.",
    responsabilidades: ["Recibir y orientar a clientes y visitantes", "Gestionar agenda y turnos", "Atender llamadas y mensajes"],
    requisitos: ["Portugués fluido", "Buena presencia y trato cordial", "Manejo básico de herramientas informáticas"],
    valorara: ["Conocimientos de guaraní", "Experiencia en atención al público"],
    beneficios: [],
    info: "Horario de lunes a viernes por la mañana y sábados medio día.",
  },
  {
    id: "ejemplo-004", puesto: "Asistente de Recursos Humanos", empresa: "Empresa industrial", area: "Recursos Humanos",
    ubicacion: "Hernandarias", modalidad: "Híbrida", jornada: "Tiempo completo", contratacion: "Relación de dependencia",
    fecha: "2026-09-26",
    resumen: "Apoyo en legajos, liquidación de haberes y procesos de selección internos.",
    descripcion: "Se busca un perfil para acompañar al área de RR. HH. en tareas de administración de personal y procesos internos.",
    responsabilidades: ["Mantener legajos del personal actualizados", "Apoyar en la liquidación de haberes", "Coordinar entrevistas internas"],
    requisitos: ["Estudios en Psicología, RR. HH. o carreras afines", "Conocimiento de legislación laboral paraguaya", "Manejo de Excel"],
    valorara: ["Experiencia con IPS y MTESS"],
    beneficios: ["Modalidad híbrida", "IPS"],
    info: "Se requiere disponibilidad para trasladarse a Hernandarias en días presenciales.",
  },
  {
    id: "ejemplo-005", puesto: "Cajero/a", empresa: "Comercio minorista", area: "Comercio",
    ubicacion: "Ciudad del Este", modalidad: "Presencial", jornada: "Turnos rotativos", contratacion: "Relación de dependencia",
    fecha: "2026-09-22",
    resumen: "Cobro, arqueo de caja y atención a clientes en salón.",
    descripcion: "Incorporamos personal de caja para atención en salón de ventas.",
    responsabilidades: ["Realizar cobros en efectivo y con tarjeta", "Hacer arqueos de caja", "Atender consultas de clientes"],
    requisitos: ["Bachiller concluido", "Disponibilidad para turnos rotativos", "Responsabilidad y honestidad"],
    valorara: ["Experiencia previa en caja"],
    beneficios: [],
    info: "Incluye trabajo en fines de semana según cronograma.",
  },
  {
    id: "ejemplo-006", puesto: "Analista Contable", empresa: "Estudio contable", area: "Contabilidad",
    ubicacion: "Ciudad del Este", modalidad: "Presencial", jornada: "Tiempo completo", contratacion: "A convenir",
    fecha: "2026-09-18",
    resumen: "Registros contables, liquidación de impuestos y conciliaciones bancarias.",
    descripcion: "Buscamos un perfil contable para gestionar la contabilidad de clientes del estudio.",
    responsabilidades: ["Registrar operaciones contables", "Liquidar IVA e IRE", "Realizar conciliaciones bancarias", "Preparar reportes mensuales"],
    requisitos: ["Lic. en Contabilidad (concluida o avanzada)", "Experiencia mínima de 2 años", "Conocimiento de Marangatu"],
    valorara: ["Manejo de sistemas contables", "Facturación electrónica (SIFEN)"],
    beneficios: ["Salario a convenir", "IPS"],
    info: "Enviar postulación con CV actualizado.",
  },
];

export function getBusqueda(id: string) {
  return BUSQUEDAS.find((b) => b.id === id);
}

export const AREAS_CV = ["Administración", "Contabilidad y finanzas", "Ventas y comercial", "Atención al cliente", "Recursos Humanos", "Logística y depósito", "Producción e industria", "Tecnología", "Marketing", "Otra"];

const MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const MESES_C = ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sep.", "oct.", "nov.", "dic."];

function partes(iso: string) {
  const [y, m, d] = iso.split("-");
  return { d: parseInt(d, 10), m: parseInt(m, 10) - 1, y };
}
export function fechaCorta(iso: string) {
  const f = partes(iso);
  return `${f.d} ${MESES_C[f.m]} ${f.y}`;
}
export function fechaLarga(iso: string) {
  const f = partes(iso);
  return `Publicada el ${f.d} de ${MESES[f.m]} de ${f.y}`;
}
export function sinAcentos(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}
