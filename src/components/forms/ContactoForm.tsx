"use client";

import { useSiteForm } from "./useSiteForm";
import { Err, Field, Success } from "./fields";

export function ContactoForm() {
  const f = useSiteForm("contacto");
  const e = f.errors;

  if (f.done) {
    return (
      <Success size="sm" title="¡Mensaje enviado!" text="Gracias por escribirnos. Te respondemos a la brevedad.">
        <button type="button" className="btn btn-line" onClick={f.reset}>Enviar otro mensaje</button>
      </Success>
    );
  }

  return (
    <form {...f.formProps} aria-label="Formulario de contacto" className="form-stack">
      <h3 className="form-title">Envianos un mensaje</h3>
      <Field id="ct-nombre" label="Nombre" error={e.nombre}>
        <input className="inp" id="ct-nombre" name="nombre" type="text" autoComplete="name" />
      </Field>
      <Field id="ct-email" label="Correo electrónico" error={e.email}>
        <input className="inp" id="ct-email" name="email" type="text" inputMode="email" autoComplete="email" />
      </Field>
      <Field id="ct-msg" label="Mensaje" error={e.mensaje}>
        <textarea className="inp" id="ct-msg" name="mensaje" placeholder="¿En qué te podemos ayudar?" />
      </Field>
      <Err msg={e.general} />
      <button className="btn btn-blue btn-block" type="submit" disabled={f.sending}>
        {f.sending ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}
