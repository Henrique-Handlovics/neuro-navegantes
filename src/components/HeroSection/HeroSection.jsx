import "./heroSection.css";
import heroIllustration from "../../assets/hero-illustration.svg";

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero">

      <div className="hero-content">

        <span className="hero-badge">Segurança digital com clareza</span>

        <h2>Navegue na internet com calma e segurança</h2>

        <p>
          O Neuro Navegantes explica, passo a passo e com linguagem direta,
          como se proteger online. Você escolhe o tema, lê no seu ritmo e
          pode ajustar o site às suas preferências no botão
          &quot;Acessibilidade&quot;.
        </p>

        <div className="hero-buttons">
          <a href="#assuntos" className="cta-button">Escolher um tema</a>
          <a href="#tutoriais" className="secondary-button">Ver tutoriais</a>
        </div>

      </div>

      <div className="hero-image">
        <img
          src={heroIllustration}
          alt="Barco a vela com o símbolo do infinito colorido na vela, em um mar colorido, com um cérebro, estrelas e uma espiral ao redor"
        />
      </div>

    </section>
  );
}
