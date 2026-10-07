"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BUSQUEDAS, fechaCorta, sinAcentos } from "@/lib/busquedas";
import { IconArrow, IconCheck, IconPin, IconSearch } from "../icons";

const AREAS = ["Todas", ...Array.from(new Set(BUSQUEDAS.map((j) => j.area)))];

export function Busquedas() {
  const [area, setArea] = useState("Todas");
  const [q, setQ] = useState("");

  const jobs = useMemo(() => {
    const nq = sinAcentos(q);
    return BUSQUEDAS.filter(
      (j) =>
        (area === "Todas" || j.area === area) &&
        (!nq || sinAcentos(`${j.puesto} ${j.area} ${j.ubicacion} ${j.empresa}`).includes(nq)),
    );
  }, [area, q]);

  const n = jobs.length;

  return (
    <section id="busquedas" aria-labelledby="busquedas-t" className="section">
      <div className="wrap stack-32">
        <div className="reveal busq-head">
          <div className="section-head" style={{ maxWidth: 640 }}>
            <span className="eyebrow">Búsquedas laborales</span>
            <h2 id="busquedas-t" className="h2">Oportunidades abiertas</h2>
            <p className="lead">Revisá las búsquedas vigentes y postulate en pocos pasos, desde tu celular o computadora.</p>
          </div>
          <span className="live" aria-live="polite">{n === 1 ? "1 búsqueda abierta" : `${n} búsquedas abiertas`}</span>
        </div>

        <div className="reveal stack-16">
          <label htmlFor="buscar" className="sr">Buscar por puesto, área o ciudad</label>
          <div className="search">
            <IconSearch style={{ color: "#4A5B73" }} />
            <input id="buscar" className="inp" type="search" placeholder="Buscar por puesto, área o ciudad" value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
          <div role="group" aria-label="Filtrar por área" className="chips">
            {AREAS.map((a) => (
              <button key={a} type="button" className={`chip${area === a ? " chip-on" : ""}`} aria-pressed={area === a} onClick={() => setArea(a)}>
                {a}
              </button>
            ))}
          </div>
        </div>

        <div className="jobs-grid">
          {jobs.map((job) => (
            <article key={job.id} className="jcard reveal">
              <div className="jcard-head">
                <div className="jcard-top">
                  <span className="badge badge-blue">BUSCAMOS</span>
                  <span className="jcard-date">{fechaCorta(job.fecha)}</span>
                </div>
                <h3 className="jcard-title">{job.puesto}</h3>
                <span className="jcard-co">{job.empresa} · {job.area}</span>
              </div>
              <div className="jcard-body">
                <div className="pills">
                  <span className="pill pill-gray"><IconPin size={15} />{job.ubicacion}</span>
                  <span className="pill pill-green">{job.modalidad}</span>
                  <span className="pill pill-gray">{job.contratacion}</span>
                </div>
                <p className="jcard-text">{job.resumen}</p>
                <div className="stack-8">
                  <span className="mini-title">Requisitos principales</span>
                  <ul className="checklist">
                    {job.requisitos.slice(0, 3).map((r) => (
                      <li key={r}><IconCheck strokeWidth={2.4} />{r}</li>
                    ))}
                  </ul>
                </div>
                <Link className="btn btn-blue jcard-cta" href={`/busquedas/${job.id}`}>
                  Ver oportunidad <IconArrow />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {n === 0 && (
          <div className="empty">
            <strong>No encontramos búsquedas con ese criterio</strong>
            <p>Probá con otra palabra o área. También podés dejarnos tu CV y te contactamos cuando surja algo acorde a tu perfil.</p>
            <div className="btn-row center">
              <button type="button" className="btn btn-line" onClick={() => { setArea("Todas"); setQ(""); }}>Ver todas las búsquedas</button>
              <Link className="btn btn-green" href="/#cargar-cv">Cargá tu CV</Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
