"use client";

import Link from "next/link";
import { AREAS_CV } from "@/lib/busquedas";
import { SITE } from "@/lib/site";
import { IconSend } from "../icons";
import { useSiteForm } from "./useSiteForm";
import { Consent, Err, Field, FileDrop, Progress, Success } from "./fields";

export function CvForm() {
  const f = useSiteForm("cv");
  const e = f.errors;

  if (f.done) {
    return (
      <Success title="¡CV recibido!" text={`Gracias por confiar en ${SITE.nombre}. Tu perfil ya forma parte de nuestra base de talentos.`}>
        <Link className="btn btn-blue" href="/#busquedas">Ver búsquedas laborales</Link>
        <button type="button" className="btn btn-line" onClick={f.reset}>Cargar otro CV</button>
      </Success>
    );
  }

  return (
    <form {...f.formProps} aria-label="Formulario para cargar tu CV" className="form-grid">
      <Field id="cv-nombre" label="Nombre y apellido" error={e.nombre} span2>
        <input className="inp" id="cv-nombre" name="nombre" type="text" autoComplete="name" placeholder="Ej.: María Benítez" />
      </Field>
      <Field id="cv-email" label="Correo electrónico" error={e.email}>
        <input className="inp" id="cv-email" name="email" type="text" inputMode="email" autoComplete="email" placeholder="nombre@correo.com" />
      </Field>
      <Field id="cv-tel" label="Teléfono" error={e.telefono}>
        <input className="inp" id="cv-tel" name="telefono" type="tel" autoComplete="tel" placeholder="09XX XXX XXX" />
      </Field>
      <Field id="cv-ciudad" label="Ciudad" error={e.ciudad}>
        <input className="inp" id="cv-ciudad" name="ciudad" type="text" autoComplete="address-level2" placeholder="Ej.: Ciudad del Este" />
      </Field>
      <Field id="cv-area" label="Área de interés" error={e.area}>
        <select className="inp" id="cv-area" name="area" defaultValue="">
          <option value="">Seleccioná un área</option>
          {AREAS_CV.map((a) => <option key={a} value={a}>{a}</option>)}
        </select>
      </Field>
      <Field id="cv-puesto" label="Puesto de interés" error={e.puesto}>
        <input className="inp" id="cv-puesto" name="puesto" type="text" placeholder="Ej.: Asistente contable" />
      </Field>
      <Field id="cv-exp" label="Años de experiencia" error={e.experiencia}>
        <select className="inp" id="cv-exp" name="experiencia" defaultValue="">
          <option value="">Seleccioná una opción</option>
          <option>Sin experiencia</option>
          <option>Menos de 1 año</option>
          <option>De 1 a 3 años</option>
          <option>De 3 a 5 años</option>
          <option>Más de 5 años</option>
        </select>
      </Field>
      <Field id="cv-linkedin" label="LinkedIn" optional error={e.linkedin} span2>
        <input className="inp" id="cv-linkedin" name="linkedin" type="text" inputMode="url" placeholder="linkedin.com/in/tu-perfil" />
      </Field>

      <FileDrop id="cv-archivo" drop={f.drop} />

      <Field id="cv-msg" label="Mensaje" optional span2>
        <textarea className="inp" id="cv-msg" name="mensaje" placeholder="Contanos brevemente sobre tu experiencia o disponibilidad" />
      </Field>

      <Consent id="cv-consent" error={e.consentimiento}>
        Al enviar tu CV, aceptás que {SITE.nombre} almacene y utilice tus datos para procesos de selección y futuras oportunidades laborales, de acuerdo con su <a href="#privacidad">política de privacidad</a>.
      </Consent>

      <Err msg={e.general} className="span2" />
      {f.sending && <Progress label="Subiendo tu CV…" value={f.progress} />}

      <div className="span2">
        <button className="btn btn-green btn-lg" type="submit" disabled={f.sending}>
          <IconSend />
          Enviar mi CV
        </button>
      </div>
    </form>
  );
}
