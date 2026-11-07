import {
  FaLifeRing,
  FaTriangleExclamation,
  FaComments,
  FaLock,
  FaGamepad,
  FaMagnifyingGlass
} from "react-icons/fa6";

// ATENÇÃO: duração e links são provisórios.
// Troque pelos vídeos reais que você for usar no site.
export const videos = [
  {
    id: 1,
    icon: <FaLifeRing />,
    title: "Como pedir ajuda online",
    description: "Saiba a quem recorrer e como explicar o que aconteceu.",
    duration: "5 minutos",
    level: "Básico",
    color: "#D6EBFF",
    iconColor: "#1D4ED8",
    topics: ["A quem pedir ajuda", "Como explicar o problema", "Guardar provas com capturas de tela", "Canais de denúncia"],
    text: "Pedir ajuda é uma atitude segura e comum. Neste conteúdo você vê passos simples para explicar o que aconteceu, guardar provas e procurar apoio.",
    url: "https://internetsegura.br"
  },
  {
    id: 2,
    icon: <FaTriangleExclamation />,
    title: "Golpes: como parar a tempo",
    description: "Aprenda os sinais mais comuns e o que fazer em cada caso.",
    duration: "6 minutos",
    level: "Básico",
    color: "#FFE9CC",
    iconColor: "#B45309",
    topics: ["Mensagens com pressa", "Prêmios e promessas fáceis", "Como confirmar pelo canal oficial", "O que fazer se você caiu"],
    text: "Golpes funcionam porque fazem a pessoa agir sem pensar. Neste conteúdo você aprende a parar, observar e confirmar antes de responder.",
    url: "https://internetsegura.br"
  },
  {
    id: 3,
    icon: <FaComments />,
    title: "Entendendo mensagens ambíguas",
    description: "Como lidar com mensagens que podem ter mais de um sentido.",
    duration: "5 minutos",
    level: "Básico",
    color: "#D9F5E3",
    iconColor: "#15803D",
    topics: ["Texto sem tom de voz", "Como perguntar com clareza", "Pedir tempo para responder", "Dizer não com educação"],
    text: "Em mensagens escritas, é comum haver mal-entendidos. Neste conteúdo você vê frases prontas para pedir esclarecimento e para dizer não.",
    url: "https://internetsegura.br"
  },
  {
    id: 4,
    icon: <FaLock />,
    title: "Senhas e verificação em duas etapas",
    description: "Proteja suas contas com hábitos simples.",
    duration: "5 minutos",
    level: "Básico",
    color: "#EADDFF",
    iconColor: "#6D28D9",
    topics: ["Criar senhas longas", "Usar uma senha por conta", "Gerenciadores de senhas", "Ativar a verificação em duas etapas"],
    text: "Neste conteúdo você aprende a criar senhas longas, a guardá-las com segurança e a ativar uma camada extra de proteção nas suas contas.",
    url: "https://internetsegura.br"
  },
  {
    id: 5,
    icon: <FaGamepad />,
    title: "Jogos e compras com consciência",
    description: "Divirta-se sem gastos por impulso e sem riscos no chat.",
    duration: "6 minutos",
    level: "Intermediário",
    color: "#FFDDEB",
    iconColor: "#BE185D",
    topics: ["Ofertas com contagem regressiva", "Limite de gasto", "Segurança no chat do jogo", "Como bloquear e denunciar"],
    text: "Neste conteúdo você vê como funcionam as ofertas de tempo limitado, como definir um limite de gastos e como se proteger no chat dos jogos.",
    url: "https://internetsegura.br"
  },
  {
    id: 6,
    icon: <FaMagnifyingGlass />,
    title: "Como checar se uma informação é confiável",
    description: "Passos simples para verificar notícias, imagens e vídeos.",
    duration: "7 minutos",
    level: "Intermediário",
    color: "#FFF3B8",
    iconColor: "#854D0E",
    topics: ["Ler a notícia inteira", "Verificar a fonte", "Imagens e vozes criadas por IA", "Não repassar na dúvida"],
    text: "Hoje é possível criar imagens, áudios e vídeos falsos com muito realismo. Neste conteúdo você aprende uma rotina curta para checar antes de acreditar.",
    url: "https://internetsegura.br"
  }
];
