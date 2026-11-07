import "./header.css";
import { InfinitoArcoIris } from "../Figuras/Figuras";

export default function Header() {
  return (
    <header className="header">

      <div className="logo">
        <InfinitoArcoIris className="logo-mark" />
        <h1 className="header-title">Neuro Navegantes</h1>
      </div>

      <nav className="header-nav" aria-label="Menu principal">
        <a className="nav-link" href="#hero">Início</a>
        <a className="nav-link" href="#assuntos">Assuntos</a>
        <a className="nav-link" href="#videos">Vídeos</a>
        <a className="nav-link" href="#tutoriais">Tutoriais</a>
        <a className="nav-link" href="#seguranca">Segurança</a>
        <a className="nav-link" href="#quiz">Quiz</a>
      </nav>

    </header>
  );
}
