import {
  FaKey,
  FaUserLock,
  FaBan,
  FaBellSlash,
  FaCreditCard,
  FaMagnifyingGlass
} from "react-icons/fa6";

export const tutorials = [
  {
    id: 1,
    icon: <FaKey />,
    title: "Como criar uma senha forte",
    description: "Um método simples para criar senhas longas e fáceis de lembrar.",
    steps: [
      "Escolha três palavras sem relação entre si.",
      "Junte as palavras e acrescente um número e um símbolo.",
      "Confira se a senha tem pelo menos 12 caracteres.",
      "Guarde a senha em um local seguro e não a compartilhe.",
    ],
  },
  {
    id: 2,
    icon: <FaUserLock />,
    title: "Como deixar seu perfil privado",
    description: "Escolha quem pode ver o que você publica.",
    steps: [
      "Abra o aplicativo e entre no seu perfil.",
      "Abra as Configurações e procure por Privacidade.",
      "Ative a opção Conta privada.",
      "Revise a lista de seguidores e remova quem você não conhece.",
    ],
  },
  {
    id: 3,
    icon: <FaBan />,
    title: "Como bloquear e denunciar",
    description: "O que fazer quando alguém te incomoda online.",
    steps: [
      "Abra o perfil ou a conversa da pessoa.",
      "Toque no nome dela ou nos três pontinhos.",
      "Escolha Bloquear ou Denunciar.",
      "Tire uma captura de tela e conte para uma pessoa de confiança.",
    ],
  },
  {
    id: 4,
    icon: <FaBellSlash />,
    title: "Como reduzir as notificações",
    description: "Receba só os avisos que realmente importam para você.",
    steps: [
      "Abra as Configurações do celular.",
      "Entre em Notificações.",
      "Escolha um aplicativo e desative os avisos que você não quer.",
      "Ative o modo Não perturbe ou Foco nos horários que preferir.",
    ],
  },
  {
    id: 5,
    icon: <FaCreditCard />,
    title: "Como controlar compras em jogos e aplicativos",
    description: "Evite compras por impulso e compras sem querer.",
    steps: [
      "Abra a loja de aplicativos do celular.",
      "Procure as configurações de compras ou de controle de gastos.",
      "Ative a exigência de senha ou biometria para cada compra.",
      "Combine com uma pessoa de confiança um limite de gasto por mês.",
    ],
  },
  {
    id: 6,
    icon: <FaMagnifyingGlass />,
    title: "Como verificar uma mensagem suspeita",
    description: "Uma rotina de quatro passos para decidir com calma.",
    steps: [
      "Pare. Não clique em nada ainda.",
      "Observe: a mensagem tem pressa, prêmio ou pedido de dados?",
      "Confirme por outro canal, como o aplicativo oficial ou um telefone que você já conhece.",
      "Se for golpe, bloqueie, denuncie e avise uma pessoa de confiança.",
    ],
  },
];
