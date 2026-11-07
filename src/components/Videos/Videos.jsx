import { useState } from "react";
import "./videos.css";
import { videos } from "./videosData";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";
import Decoracao from "../Figuras/Figuras";
import Reveal from "../Reveal/Reveal";

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="videos-section" id="videos">

      <div className="videos-header">
        <Decoracao tipo="estrelas" />
        <span className="videos-badge">Vídeos</span>
        <h2>Aprenda assistindo</h2>
        <p>
          Prefere ver em vez de ler? Escolha um vídeo curto sobre um dos
          temas. Cada card mostra a duração antes de você abrir.
        </p>
      </div>

      <div className="videos-grid">
        {videos.map((video, i) => (
          <Reveal key={video.id} delay={(i % 3) * 90}>
            <VideoCard video={video} onOpen={setSelectedVideo} />
          </Reveal>
        ))}
      </div>

      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />

    </section>
  );
}
