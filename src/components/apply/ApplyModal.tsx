"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import type { Busqueda } from "@/lib/busquedas";
import { SITE } from "@/lib/site";
import { IconClose } from "../icons";
import { useSiteForm } from "../forms/useSiteForm";
import { Consent, Err, Field, FileDrop, Progress, Success } from "../forms/fields";

export function ApplyModal({ job, onClose }: { job: Busqueda; onClose: () => void }) {
  const router = useRouter();
  const f = useSiteForm("apply", { busqueda_id: job.id });
  const e = f.errors;
  const sendingRef = useRef(false);
  useEffect(() => {
    sendingRef.current = f.sending;
  }, [f.sending]);

  const safeClose = () => {
    if (!sendingRef.current) onClose();
  };

  useEffect(() => {
    const t = setTimeout(() => document.getElementById("ap-nombre")?.focus(), 60);
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === "Escape" && !sendingRef.current) onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div className="overlay" onClick={safeClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="ap-t" onClick={(ev) => ev.stopPropagation()}>
        <div className="modal-head">
          <div className="modal-titles">
            <span className="eyebrow eyebrow-sm">Postulación</span>
            <h2 id="ap-t">{job.puesto}</h2>
            <span className="modal-sub">{job.ubicacion} · {job.modalidad}</span>
          </div>
          <button type="button" className="iconbtn" aria-label="Cerrar" onClick={onClose} style={{ flex: "none" }}>
            <IconClose size={20} strokeWidth={2.2} />
          </button>
        </div>
        <div className="modal-body">
          {f.done ? (
            <Success
              size="sm"
              title="¡Postulación enviada!"
              text="Gracias por postularte. Revisaremos tu perfil y, si se ajusta a la búsqueda, nos vamos a comunicar con vos."
            >
              <button type="button" className="btn btn-blue" onClick={() => { onClose(); router.push("/#busquedas"); }}>Ver más búsquedas</button>
              <button type="button" className="btn btn-line" onClick={onClose}>Cerrar</button>
            </Success>
          ) : (
            <form {...f.formProps} aria-label="Formulario de postulación" className="form-grid form-grid-tight">
              <Field id="ap-nombre" label="Nombre y apellido" error={e.nombre} span2>
                <input className="inp" id="ap-nombre" name="nombre" type="text" autoComplete="name" />
              </Field>
              <Field id="ap-email" label="Correo electrónico" error={e.email}>
                <input className="inp" id="ap-email" name="email" type="text" inputMode="email" autoComplete="email" />
              </Field>
              <Field id="ap-tel" label="Teléfono" error={e.telefono}>
                <input className="inp" id="ap-tel" name="telefono" type="tel" autoComplete="tel" placeholder="09XX XXX XXX" />
              </Field>
              <Field id="ap-ciudad" label="Ciudad" error={e.ciudad} span2>
                <input className="inp" id="ap-ciudad" name="ciudad" type="text" autoComplete="address-level2" />
              </Field>
              <FileDrop id="ap-archivo" drop={f.drop} compact />
              <Field id="ap-msg" label="Mensaje" optional span2>
                <textarea className="inp" id="ap-msg" name="mensaje" style={{ minHeight: 88 }} placeholder="¿Por qué te interesa este puesto?" />
              </Field>
              <Consent id="ap-consent" error={e.consentimiento}>
                Acepto que {SITE.nombre} almacene y utilice mis datos para procesos de selección y futuras oportunidades laborales, de acuerdo con su <a href="#privacidad">política de privacidad</a>.
              </Consent>
              <Err msg={e.general} className="span2" />
              {f.sending && <Progress label="Enviando postulación…" value={f.progress} />}
              <div className="span2">
                <button className="btn btn-green btn-lg" type="submit" disabled={f.sending}>Enviar postulación</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
