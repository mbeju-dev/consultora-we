import Link from "next/link";
import { IconArrow, IconBuilding, IconUser } from "../icons";

export function Caminos() {
  return (
    <section aria-labelledby="caminos-t" className="section section-bg" style={{ padding: "88px 0" }}>
      <div className="wrap stack-40">
        <div className="reveal section-head center">
          <span className="eyebrow">¿Cómo te ayudamos?</span>
          <h2 id="caminos-t" className="h2" style={{ maxWidth: 720 }}>Trabajamos con empresas y con personas</h2>
        </div>
        <div className="caminos-grid">
          <article className="reveal camino camino-blue">
            <div aria-hidden="true" className="ring" />
            <span className="camino-kicker" style={{ color: "#D6E4FA" }}><IconBuilding size={20} strokeWidth={2} />Soy empresa</span>
            <h3 className="camino-title">Encontrá el talento que tu empresa necesita.</h3>
            <p className="camino-text" style={{ color: "#E3ECFA" }}>Te acompañamos en la búsqueda y selección de profesionales adecuados para cada posición.</p>
            <Link className="btn btn-white" href="/#solicitar" style={{ marginTop: 8 }}>Solicitar una búsqueda <IconArrow /></Link>
          </article>
          <article className="reveal camino camino-green">
            <div aria-hidden="true" className="ring" />
            <span className="camino-kicker" style={{ color: "#D8F2E0" }}><IconUser size={20} />Soy candidato/a</span>
            <h3 className="camino-title">Encontrá tu próxima oportunidad.</h3>
            <p className="camino-text" style={{ color: "#E2F4E7" }}>Conocé nuestras búsquedas abiertas y dejá tu CV para formar parte de nuestra base de talentos.</p>
            <div className="btn-row" style={{ marginTop: 8 }}>
              <Link className="btn btn-white" href="/#busquedas">Ver oportunidades <IconArrow /></Link>
              <Link className="btn btn-ghost-w" href="/#cargar-cv">Cargá tu CV</Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
