import useEscape from "../../hooks/useEscape";

export default function VideoModal({ video, onClose }) {
  useEscape(Boolean(video), onClose);

  if (!video) return null;

  return (
    <div className="video-overlay" onClick={onClose}>

      <div
        className="video-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-title"
        onClick={(e) => e.stopPropagation()}
      >

        <button className="video-close" onClick={onClose} aria-label="Fechar">
          ✕
        </button>

        <div className="video-header">

          <div
            className="video-modal-icon"
            style={{ backgroundColor: video.color, color: video.iconColor }}
            aria-hidden="true"
          >
            {video.icon}
          </div>

          <div>
            <h2 id="video-title">{video.title}</h2>
            <div className="video-badges">
              <span>Nível: {video.level}</span>
              <span>Duração: {video.duration}</span>
            </div>
          </div>

        </div>

        <div className="video-divider"></div>

        <h3>O que você vai aprender</h3>

        <ul className="video-topics">
          {video.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>

        <div className="video-divider"></div>

        <h3>Sobre o conteúdo</h3>

        <p className="video-description">{video.text}</p>

        <div className="video-actions">
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="watch-btn"
          >
            Abrir conteúdo (abre em nova aba)
          </a>
        </div>

      </div>

    </div>
  );
}
