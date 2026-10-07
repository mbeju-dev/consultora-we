import { CvForm } from "../forms/CvForm";

const PASOS = [
  "Completá tus datos y el área en la que te gustaría trabajar.",
  "Adjuntá tu CV en PDF, desde el celular o la computadora.",
  "Te contactamos cuando haya una oportunidad acorde a tu perfil.",
];

export function CargarCv() {
  return (
    <section id="cargar-cv" aria-labelledby="cv-t" className="section" style={{ background: "var(--green-50)" }}>
      <div className="wrap split split-380">
        <div className="reveal stack-20">
          <span className="eyebrow">Cargá tu CV</span>
          <h2 id="cv-t" className="h2">Formá parte de nuestra base de talentos</h2>
          <p className="lead" style={{ color: "#33445C" }}>
            ¿No encontraste una búsqueda que se ajuste a tu perfil? Dejanos tu CV y podremos contactarte cuando surja una oportunidad acorde a tu experiencia.
          </p>
          <ul className="steps">
            {PASOS.map((p, i) => (
              <li key={p}>
                <span className="step-num">{i + 1}</span>
                <span className="step-text">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal card card-shadow">
          <CvForm />
        </div>
      </div>
    </section>
  );
}
