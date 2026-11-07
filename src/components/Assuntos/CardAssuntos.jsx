export default function CardAssuntos({ assunto, onOpen }) {
  const { icon, title, description, color, buttonColor, iconColor } = assunto;

  return (
    <article
      className="topic-card"
      style={{ backgroundColor: color, borderTop: `8px solid ${iconColor}` }}
    >

      <div className="topic-icon" style={{ color: iconColor }} aria-hidden="true">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <button
        className="topic-btn"
        style={{ backgroundColor: buttonColor }}
        onClick={() => onOpen(assunto)}
      >
        Ler sobre {title.toLowerCase()}
      </button>

    </article>
  );
}
