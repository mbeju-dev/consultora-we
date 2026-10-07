export const SITE = {
  nombre: process.env.NEXT_PUBLIC_SITE_NAME || "Consultora RH",
  ciudad: "Ciudad del Este",
  region: "Alto Paraná, Paraguay",
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP ?? "").replace(/\D/g, ""),
  email: (process.env.NEXT_PUBLIC_EMAIL ?? "").trim(),
  logoUrl: process.env.NEXT_PUBLIC_LOGO_URL ?? "",
  redes: { instagram: "#instagram", facebook: "#facebook", linkedin: "#linkedin" },
};

export function waLink(texto: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(texto)}`;
}

export const WA = {
  general: waLink(`Hola ${SITE.nombre}, tengo una consulta.`),
  empresa: waLink(`Hola ${SITE.nombre}, quiero solicitar una búsqueda de personal.`),
  busqueda: (puesto: string) => waLink(`Hola ${SITE.nombre}, tengo una consulta sobre la búsqueda: ${puesto}`),
};

export const waLabel = SITE.whatsapp ? `+${SITE.whatsapp}` : "[Número de WhatsApp]";
export const mailto = SITE.email ? `mailto:${SITE.email}` : "/#contacto";
export const emailLabel = SITE.email || "[Correo de contacto]";

export const NAV = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Para Empresas", href: "/#empresas" },
  { label: "Búsquedas Laborales", href: "/#busquedas" },
  { label: "Cargá tu CV", href: "/#cargar-cv" },
  { label: "Sobre nosotros", href: "/#sobre" },
  { label: "Contacto", href: "/#contacto" },
];
