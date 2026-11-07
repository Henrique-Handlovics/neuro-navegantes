import "./seguranca.css";
import SecurityCard from "./SecurityCard";
import WarningBox from "./WarningBox";
import { golpes } from "./golpesData";
import Decoracao from "../Figuras/Figuras";
import Reveal from "../Reveal/Reveal";
import { palette } from "../../theme/palette";

import {
  FaHand,
  FaCircleCheck,
  FaShieldHalved,
  FaLock,
  FaHeart,
  FaArrowRotateRight
} from "react-icons/fa6";

const dicas = [
  { Icon: FaHand, texto: "Pare e respire antes de clicar ou responder." },
  { Icon: FaCircleCheck, texto: "Confirme pedidos estranhos por outro canal." },
  { Icon: FaShieldHalved, texto: "Você pode dizer não a qualquer pedido que te deixe desconfortável." },
  { Icon: FaLock, texto: "Senhas e códigos são só seus." },
  { Icon: FaHeart, texto: "Peça ajuda a uma pessoa de confiança. Golpes enganam qualquer pessoa." },
  { Icon: FaArrowRotateRight, texto: "Mantenha o celular e os aplicativos atualizados." },
];

export default function Security() {
  return (
    <section className="seguranca-section" id="seguranca">

      <div className="seguranca-header">
        <Decoracao tipo="cerebro" />
        <span className="seguranca-badge">Segurança digital</span>
        <h2>Como reconhecer situações de risco</h2>
        <p>
          Estas são as situações mais comuns. Conhecê-las ajuda você a
          perceber o problema antes de agir.
        </p>
      </div>

      <h3 className="section-title">Situações mais comuns</h3>

      <div className="security-grid">
        {golpes.map((golpe, i) => (
          <Reveal key={golpe.id} delay={i * 90}>
            <SecurityCard {...golpe} />
          </Reveal>
        ))}
      </div>

      <h3 className="section-title">Como se proteger</h3>

      <div className="tips-grid">
        {dicas.map(({ Icon, texto }, i) => {
          const cor = palette[i % palette.length];
          return (
            <Reveal key={i} delay={(i % 3) * 90}>
              <div className="tip-card">
                <span className="tip-icon" style={{ background: cor.bg }}>
                  <Icon aria-hidden="true" style={{ color: cor.accent }} />
                </span>
                {texto}
              </div>
            </Reveal>
          );
        })}
      </div>

      <WarningBox />

    </section>
  );
}
