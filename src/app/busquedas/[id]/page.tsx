import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BUSQUEDAS, fechaCorta, fechaLarga, getBusqueda } from "@/lib/busquedas";
import { WA } from "@/lib/site";
import { ApplyButton, ApplyProvider } from "@/components/apply/ApplyContext";
import { MobileBar } from "@/components/layout/Footer";
import { IconBack, IconCheck, IconPlus } from "@/components/icons";

export function generateStaticParams() {
  return BUSQUEDAS.map((b) => ({ id: b.id }));
}

export async function generateMetadata(props: PageProps<"/busquedas/[id]">): Promise<Metadata> {
  const { id } = await props.params;
  const job = getBusqueda(id);
  return job ? { title: job.puesto, description: job.resumen } : {};
}

export default async function BusquedaPage(props: PageProps<"/busquedas/[id]">) {
  const { id } = await props.params;
  const job = getBusqueda(id);
  if (!job) notFound();

  return (
    <ApplyProvider job={job}>
      <article aria-labelledby="det-t" className="detail">
        <div className="detail-hero">
          <div aria-hidden="true" className="ring ring-lg" />
          <div className="wrap detail-hero-inner">
            <Link href="/#busquedas" className="back-btn"><IconBack />Volver a búsquedas</Link>
            <span className="badge badge-green badge-lg">¡BUSCAMOS!</span>
            <h1 id="det-t" className="detail-title">{job.puesto}</h1>
            <p className="detail-co">{job.empresa} · {job.area}</p>
            <div className="pills">
              {[job.ubicacion, job.modalidad, job.jornada, fechaLarga(job.fecha)].map((t) => (
                <span key={t} className="pill pill-glass">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="wrap detail-body">
          <div className="detail-main">
            <section className="stack-12">
              <h2 className="h2-sm">Descripción del puesto</h2>
              <p className="detail-p">{job.descripcion}</p>
            </section>
            <section className="stack-14">
              <h2 className="h2-sm">Responsabilidades</h2>
              <ul className="list">
                {job.responsabilidades.map((r) => (
                  <li key={r}><span className="dot" />{r}</li>
                ))}
              </ul>
            </section>
            <section className="stack-14 req-box">
              <h2 className="h2-sm">Requisitos</h2>
              <ul className="list" style={{ color: "#1F2F45" }}>
                {job.requisitos.map((r) => (
                  <li key={r}><IconCheck size={20} strokeWidth={2.4} className="li-icon" style={{ color: "var(--green-ink)" }} />{r}</li>
                ))}
              </ul>
            </section>
            {job.valorara.length > 0 && (
              <section className="stack-14">
                <h2 className="h2-sm">Se valorará</h2>
                <ul className="list">
                  {job.valorara.map((r) => (
                    <li key={r}><IconPlus className="li-icon" style={{ color: "var(--blue)" }} />{r}</li>
                  ))}
                </ul>
              </section>
            )}
            {job.beneficios.length > 0 && (
              <section className="stack-14">
                <h2 className="h2-sm">Beneficios</h2>
                <div className="pills">
                  {job.beneficios.map((b) => <span key={b} className="pill pill-benefit">{b}</span>)}
                </div>
              </section>
            )}
            <section className="stack-12">
              <h2 className="h2-sm">Información adicional</h2>
              <p className="detail-p">{job.info}</p>
            </section>
          </div>

          <aside className="detail-aside">
            <div className="summary">
              <h2 style={{ fontSize: 20 }}>Resumen de la búsqueda</h2>
              <dl className="summary-dl">
                <dt>Ubicación</dt><dd>{job.ubicacion}</dd>
                <dt>Modalidad</dt><dd>{job.modalidad}</dd>
                <dt>Jornada</dt><dd>{job.jornada}</dd>
                <dt>Contratación</dt><dd>{job.contratacion}</dd>
                <dt>Publicada</dt><dd>{fechaCorta(job.fecha)}</dd>
              </dl>
              <ApplyButton className="btn btn-green btn-lg">Postularme</ApplyButton>
              <a className="btn btn-line btn-block" href={WA.busqueda(job.puesto)} target="_blank" rel="noopener">Consultar por WhatsApp</a>
            </div>
            <div className="aside-note">
              <strong>¿No es lo que buscás?</strong>
              <span>Dejanos tu CV y te contactamos cuando surja una oportunidad acorde a tu perfil.</span>
              <Link href="/#cargar-cv">Cargá tu CV →</Link>
            </div>
          </aside>
        </div>
      </article>
      <MobileBar>
        <ApplyButton className="btn btn-green mbar-btn">Postularme</ApplyButton>
      </MobileBar>
    </ApplyProvider>
  );
}
