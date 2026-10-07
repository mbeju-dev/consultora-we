"use client";

import { SITE } from "@/lib/site";
import { useSiteForm } from "./useSiteForm";
import { Err, Field, Success } from "./fields";

export function EmpresaForm() {
  const f = useSiteForm("empresa");
  const e = f.errors;

  if (f.done) {
    return (
      <Success
        tone="blue"
        size="md"
        title="¡Solicitud recibida!"
        text={`Gracias por contactarnos. Un integrante de ${SITE.nombre} se va a comunicar con vos a la brevedad para conocer más sobre la búsqueda.`}
      >
        <button type="button" className="btn btn-line" onClick={f.reset}>Enviar otra solicitud</button>
      </Success>
    );
  }

  return (
    <form {...f.formProps} aria-label="Formulario para solicitar una búsqueda" className="form-grid">
      <Field id="em-empresa" label="Empresa" error={e.empresa}>
        <input className="inp" id="em-empresa" name="empresa" type="text" autoComplete="organization" />
      </Field>
      <Field id="em-contacto" label="Nombre de contacto" error={e.contacto}>
        <input className="inp" id="em-contacto" name="contacto" type="text" autoComplete="name" />
      </Field>
      <Field id="em-cargo" label="Cargo" error={e.cargo}>
        <input className="inp" id="em-cargo" name="cargo" type="text" autoComplete="organization-title" placeholder="Ej.: Gerente de RR. HH." />
      </Field>
      <Field id="em-tel" label="Teléfono" error={e.telefono}>
        <input className="inp" id="em-tel" name="telefono" type="tel" autoComplete="tel" />
      </Field>
      <Field id="em-email" label="Correo" error={e.email} span2>
        <input className="inp" id="em-email" name="email" type="text" inputMode="email" autoComplete="email" />
      </Field>
      <Field id="em-puesto" label="Puesto a cubrir" error={e.puesto}>
        <input className="inp" id="em-puesto" name="puesto" type="text" />
      </Field>
      <Field id="em-vac" label="Cantidad de vacantes" error={e.vacantes}>
        <input className="inp" id="em-vac" name="vacantes" type="text" inputMode="numeric" placeholder="1" />
      </Field>
      <Field id="em-ubic" label="Ubicación" error={e.ubicacion}>
        <input className="inp" id="em-ubic" name="ubicacion" type="text" placeholder="Ej.: Ciudad del Este" />
      </Field>
      <Field id="em-fecha" label="Fecha estimada de incorporación" optional>
        <input className="inp" id="em-fecha" name="fecha_incorporacion" type="date" />
      </Field>
      <Field id="em-desc" label="Descripción de la necesidad" error={e.descripcion} span2>
        <textarea className="inp" id="em-desc" name="descripcion" placeholder="Tareas principales, perfil buscado, horario, rango salarial si lo tenés definido…" />
      </Field>
      <Err msg={e.general} className="span2" />
      <div className="span2">
        <button className="btn btn-blue btn-lg" type="submit" disabled={f.sending}>
          {f.sending ? "Enviando…" : "Solicitar asesoramiento"}
        </button>
      </div>
    </form>
  );
}
