import { SITE } from "@/lib/site";
import { IconCheck, IconImage, IconPin } from "../icons";

const VALORES = [
  { t: "Atención humana", d: "Cada persona y cada empresa es escuchada." },
  { t: "Transparencia", d: "Procesos claros y comunicación honesta." },
  { t: "Conocimiento local", d: "Entendemos el mercado de Alto Paraná." },
  { t: "Acompañamiento", d: "Estamos presentes en cada etapa." },
];

export function Sobre() {
  return (
    <section id="sobre" aria-labelledby="sobre-t" className="section section-bg">
      <div className="wrap split split-400 center-items" style={{ gap: 56 }}>
        <div className="reveal" style={{ position: "relative" }}>
          <div className="photo-ph">
            <IconImage />
            <strong>[Foto real del equipo u oficina]</strong>
            <span>Recomendado: imagen propia, no de stock</span>
          </div>
          <div className="float place-badge">
            <span className="place-icon"><IconPin /></span>
            <span className="place-text"><strong>{SITE.ciudad}</strong><span>{SITE.region}</span></span>
          </div>
        </div>
        <div className="reveal stack-20">
          <span className="eyebrow">Sobre nosotros</span>
          <h2 id="sobre-t" className="h2">Una consultora cercana, enfocada en las personas</h2>
          <p className="lead" style={{ color: "#33445C" }}>
            {SITE.nombre} conecta a personas con empresas. Escuchamos a cada organización para entender qué necesita, identificamos el talento adecuado y acompañamos a cada candidato durante el proceso.
          </p>
          <p style={{ fontSize: 17, color: "var(--muted)" }}>
            Creemos que una buena incorporación empieza por una buena relación: por eso buscamos construir vínculos profesionales a largo plazo, tanto con las empresas como con las personas que confían en nosotros.
          </p>
          <div className="valores">
            {VALORES.map((v) => (
              <div key={v.t} className="valor">
                <span className="valor-icon"><IconCheck strokeWidth={2.2} /></span>
                <span className="valor-text"><strong>{v.t}</strong><span>{v.d}</span></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
