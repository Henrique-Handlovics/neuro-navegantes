import { FaClock, FaUserSecret, FaGift } from "react-icons/fa6";

export const golpes = [
  {
    id: 1,
    icon: <FaClock />,
    title: "Mensagem com pressa",
    description: "Avisos como \"responda em 10 minutos\" querem impedir que você pense. Pare e confirme antes de agir.",
    color: "#FFE9CC",
    iconColor: "#B45309"
  },
  {
    id: 2,
    icon: <FaUserSecret />,
    title: "Perfil falso",
    description: "Alguém finge ser amigo, colega ou pessoa famosa para ganhar sua confiança. Aceite só quem você conhece.",
    color: "#EADDFF",
    iconColor: "#6D28D9"
  },
  {
    id: 3,
    icon: <FaGift />,
    title: "Promessa fácil",
    description: "Prêmios, dinheiro rápido e produtos grátis costumam ser golpes. Nenhuma empresa séria pede seus dados para entregar um prêmio.",
    color: "#D6EBFF",
    iconColor: "#1D4ED8"
  }
];
