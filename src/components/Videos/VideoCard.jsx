export default function VideoCard({ video, onOpen }) {
  return (
    <article className="video-card" style={{ backgroundColor: video.color, borderTop: `8px solid ${video.iconColor}` }}>

      <div className="video-icon" style={{ color: video.iconColor }} aria-hidden="true">
        {video.icon}
      </div>

      <span className="video-level">Nível: {video.level}</span>

      <h3>{video.title}</h3>

      <p>{video.description}</p>

      <div className="video-info">
        <span>Duração: {video.duration}</span>
      </div>

      <button className="video-btn" onClick={() => onOpen(video)}>
        Ver detalhes
      </button>

    </article>
  );
}
