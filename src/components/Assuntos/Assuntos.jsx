import { useState } from "react";
import "./assuntos.css";
import CardAssuntos from "./CardAssuntos";
import ModalAssuntos from "./ModalAssuntos";
import { assuntos } from "./assuntosData";
import Decoracao from "../Figuras/Figuras";
import Reveal from "../Reveal/Reveal";

export default function Assuntos() {
  const [selectedAssunto, setSelectedAssunto] = useState(null);

  return (
    <section id="assuntos" className="assuntos-section">

      <div className="assuntos-hero">
        <Decoracao tipo="infinito" />
        <h2>Escolha um tema</h2>
        <p>Cada tema tem explicações curtas e diretas. Leia no seu ritmo.</p>
      </div>

      <div className="grid-cards">
        {assuntos.map((assunto, i) => (
          <Reveal key={assunto.id} delay={(i % 3) * 90}>
            <CardAssuntos assunto={assunto} onOpen={setSelectedAssunto} />
          </Reveal>
        ))}
      </div>

      <ModalAssuntos
        assunto={selectedAssunto}
        onClose={() => setSelectedAssunto(null)}
      />

    </section>
  );
}
