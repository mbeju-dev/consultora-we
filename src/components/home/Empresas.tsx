import { WA } from "@/lib/site";
import { EmpresaForm } from "../forms/EmpresaForm";
import { IconPath, IconWhatsApp } from "../icons";

const SERVICIOS = [
  { t: "Búsqueda y selección de personal", d: "Gestionamos el proceso completo para cubrir cada posición con el perfil adecuado.", icon: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-5-5" },
  { t: "Publicación de oportunidades", d: "Difundimos tus búsquedas para llegar a candidatos de la zona.", icon: "M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1zM15 9a3 3 0 0 1 0 6M18 6a7 7 0 0 1 0 12" },
  { t: "Screening de perfiles", d: "Revisamos y filtramos postulaciones según los requisitos del puesto.", icon: "M4 6h16M7 12h10M10 18h4" },
  { t: "Evaluación de candidatos", d: "Entrevistamos y evaluamos a los candidatos antes de presentártelos.", icon: "M9 11l3 3 8-8M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" },
  { t: "Selección de talento", d: "Te presentamos una terna de perfiles para que tomes la mejor decisión.", icon: "M12 3l2.7 5.5 6 .9-4.4 4.2 1 6L12 16.8 6.7 19.6l1-6L3.3 9.4l6-.9z" },
  { t: "Apoyo en procesos de contratación", d: "Te acompañamos hasta la incorporación de la persona elegida.", icon: "M8 12l2 2 4-4M7 4h10l3 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z" },
];

const PROCESO = [
  { t: "Entendemos tu necesidad", d: "Conversamos sobre el puesto, las tareas y el perfil que encaja con tu equipo." },
  { t: "Publicamos y buscamos", d: "Difundimos la oportunidad y revisamos nuestra base de talentos." },
  { t: "Evaluamos perfiles", d: "Hacemos el screening y evaluamos a los candidatos según tus requisitos." },
  { t: "Te presentamos candidatos", d: "Recibís una terna de perfiles y te acompañamos hasta la contratación." },
];

export function Empresas() {
  return (
    <section id="empresas" aria-labelledby="emp-t" className="section">
      <div className="wrap stack-56">
        <div className="reveal section-head" style={{ maxWidth: 720 }}>
          <span className="eyebrow">Para empresas</span>
          <h2 id="emp-t" className="h2">El talento que tu empresa necesita.</h2>
          <p className="lead">
            Nos ocupamos del proceso de búsqueda para que vos te enfoques en tu negocio. Entendemos lo que necesitás y te presentamos perfiles que se ajustan al puesto y a tu equipo.
          </p>
        </div>

        <div className="svc-grid">
          {SERVICIOS.map((s) => (
            <div key={s.t} className="svc reveal">
              <span className="svc-icon"><IconPath d={s.icon} /></span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>

        <div className="reveal proceso">
          <h3>Así trabajamos</h3>
          <ol className="proceso-list">
            {PROCESO.map((p, i) => (
              <li key={p.t}>
                <span className="proceso-num" style={i === PROCESO.length - 1 ? { color: "var(--green-ink)" } : undefined}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <strong>{p.t}</strong>
                <span className="proceso-text">{p.d}</span>
              </li>
            ))}
          </ol>
        </div>

        <div id="solicitar" className="split split-360">
          <div className="reveal stack-16">
            <h3 className="h3-lg">Solicitar una búsqueda</h3>
            <p style={{ fontSize: 17, color: "var(--muted)" }}>
              Contanos qué puesto necesitás cubrir. Te contactamos para entender el perfil y proponerte cómo avanzar.
            </p>
            <a className="btn btn-line" href={WA.empresa} target="_blank" rel="noopener" style={{ alignSelf: "flex-start" }}>
              <IconWhatsApp size={20} />
              Prefiero hablar por WhatsApp
            </a>
          </div>
          <div className="reveal card card-border">
            <EmpresaForm />
          </div>
        </div>
      </div>
    </section>
  );
}
