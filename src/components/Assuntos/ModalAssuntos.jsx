import useEscape from "../../hooks/useEscape";

export default function ModalAssuntos({ assunto, onClose }) {
  useEscape(Boolean(assunto), onClose);

  if (!assunto) return null;

  return (
    <div className="topic-overlay" onClick={onClose}>

      <div
        className="topic-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="topic-title"
        onClick={(e) => e.stopPropagation()}
      >

        <button className="topic-close" onClick={onClose} aria-label="Fechar">
          ✕
        </button>

        <div className="topic-modal-icon" style={{ color: assunto.modalAccent }} aria-hidden="true">
          {assunto.icon}
        </div>

        <h2 id="topic-title">{assunto.title}</h2>

        <p className="topic-intro">{assunto.intro}</p>

        <ul className="topic-list">
          {assunto.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <button
          className="topic-confirm"
          style={{ backgroundColor: assunto.modalAccent }}
          onClick={onClose}
        >
          Entendi
        </button>

      </div>

    </div>
  );
}
