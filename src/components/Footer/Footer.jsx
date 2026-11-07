import "./footer.css";
import { InfinitoArcoIris } from "../Figuras/Figuras";

// Logo opcional: coloque "logo-unisanta.png" (ou .jpg/.svg/.webp) em src/assets.
// Se o arquivo não existir, o rodapé aparece normalmente, sem a imagem.
const logos = import.meta.glob("../../assets/logo-unisanta.*", {
  eager: true,
  import: "default",
});
const logoUnisanta = Object.values(logos)[0];

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-motto">
        <InfinitoArcoIris className="footer-infinity" />
        <p>A neurodiversidade faz parte da diversidade humana.</p>
      </div>

      <div className="content">
        <p>&copy; Desenvolvido por <b>Henrique Handlovics</b></p>
        <p>Para <b>Projeto de Extensão - Unisanta</b></p>
      </div>

      {logoUnisanta && (
        <img src={logoUnisanta} alt="Logo da Unisanta" className="logo-footer" />
      )}

    </footer>
  );
}
