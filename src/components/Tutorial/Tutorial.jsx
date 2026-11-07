import "./tutorial.css";
import TutorialsSection from "./TutorialsSection";
import Decoracao from "../Figuras/Figuras";

export default function Tutoriais() {
  return (
    <section id="tutoriais" className="tutoriais">

      <div className="tutoriais-container">
        <Decoracao tipo="espiral" />
        <h2 className="tutoriais-title">Tutoriais passo a passo</h2>
        <p className="tutoriais-description">
          Instruções curtas, em ordem. Você avança um passo de cada vez,
          no seu tempo.
        </p>
      </div>

      <TutorialsSection />

    </section>
  );
}
