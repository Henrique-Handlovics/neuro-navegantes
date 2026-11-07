import { palette } from "../../theme/palette";

export default function TutorialCard({ tutorial, onOpen }) {
  const cor = palette[(tutorial.id - 1) % palette.length];

  return (
    <article
      className="tutorial-card"
      style={{ background: cor.bg, borderTop: `8px solid ${cor.accent}` }}
    >

      <div className="tutorial-icon" style={{ color: cor.accent }} aria-hidden="true">
        {tutorial.icon}
      </div>

      <h3>{tutorial.title}</h3>

      <p>{tutorial.description}</p>

      <button style={{ background: cor.accent }} onClick={() => onOpen(tutorial)}>
        Abrir tutorial ({tutorial.steps.length} passos)
      </button>

    </article>
  );
}
