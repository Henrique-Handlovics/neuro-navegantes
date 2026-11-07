import {
  FaTriangleExclamation,
  FaLock,
  FaComments,
  FaUserShield,
  FaGamepad,
  FaBell
} from "react-icons/fa6";

export const assuntos = [
  {
    id: 1,
    icon: <FaTriangleExclamation />,
    title: "Golpes online",
    description: "Entenda como os golpes funcionam e como parar a tempo.",
    color: "#FFE9CC",
    iconColor: "#B45309",
    buttonColor: "#B45309",
    modalAccent: "#B45309",
    intro: "Golpistas tentam fazer você agir rápido, sem pensar. Eles fingem ser bancos, lojas, empresas ou conhecidos.",
    items: [
      "Se a mensagem pede pressa, pare. A pressa é um sinal de golpe.",
      "Se a mensagem promete prêmio ou dinheiro fácil, não clique no link.",
      "Se alguém pede senha ou código, não envie. Empresas de verdade não pedem isso.",
      "Se ficar em dúvida, confirme por outro canal, como o aplicativo oficial ou um telefone que você já conhece.",
      "Se você já clicou ou respondeu, avise uma pessoa de confiança e troque suas senhas."
    ]
  },
  {
    id: 2,
    icon: <FaLock />,
    title: "Senhas",
    description: "Crie senhas fortes e guarde-as com segurança.",
    color: "#D6EBFF",
    iconColor: "#1D4ED8",
    buttonColor: "#1D4ED8",
    modalAccent: "#1D4ED8",
    intro: "Uma senha protege suas contas, como uma chave protege uma casa. Quem tem a senha consegue entrar na conta.",
    items: [
      "Use uma senha longa, com pelo menos 12 caracteres. Uma boa forma é juntar três palavras sem relação e acrescentar um número.",
      "Não use data de nascimento, seu nome ou sequências como 123456.",
      "Use uma senha diferente para cada conta importante.",
      "Não envie sua senha por mensagem.",
      "Se for difícil lembrar, use um gerenciador de senhas ou um caderno guardado em local seguro.",
      "Ative a verificação em duas etapas quando o serviço oferecer."
    ]
  },
  {
    id: 3,
    icon: <FaComments />,
    title: "Conversas e mensagens",
    description: "Entenda mensagens confusas e saiba como responder.",
    color: "#D9F5E3",
    iconColor: "#15803D",
    buttonColor: "#15803D",
    modalAccent: "#15803D",
    intro: "Mensagens de texto não mostram tom de voz nem expressão do rosto. Por isso, podem ser difíceis de entender.",
    items: [
      "Se uma mensagem parecer ambígua, você pode perguntar: \"Você pode explicar melhor?\".",
      "Respostas curtas, pontos finais e emojis nem sempre significam raiva ou desinteresse.",
      "Você não precisa responder na hora. Pode dizer: \"Vou pensar e te respondo depois\".",
      "Você pode dizer não a qualquer pedido que te deixe desconfortável.",
      "Se alguém insistir depois de você dizer não, bloqueie a pessoa e conte para alguém de confiança."
    ]
  },
  {
    id: 4,
    icon: <FaUserShield />,
    title: "Privacidade",
    description: "Decida o que compartilhar e com quem.",
    color: "#EADDFF",
    iconColor: "#6D28D9",
    buttonColor: "#6D28D9",
    modalAccent: "#6D28D9",
    intro: "Tudo o que você publica pode ser salvo e compartilhado por outras pessoas, mesmo depois de você apagar.",
    items: [
      "Deixe seus perfis privados quando possível.",
      "Não publique seu endereço, sua escola, seu local de trabalho ou sua rotina.",
      "Não envie fotos íntimas. Se alguém pedir, isso é um sinal de alerta.",
      "Antes de postar, pergunte-se: eu aceitaria que qualquer pessoa visse isso?",
      "De vez em quando, revise quem pode ver suas publicações."
    ]
  },
  {
    id: 5,
    icon: <FaGamepad />,
    title: "Jogos e compras",
    description: "Jogue com segurança e evite gastos por impulso.",
    color: "#FFDDEB",
    iconColor: "#BE185D",
    buttonColor: "#BE185D",
    modalAccent: "#BE185D",
    intro: "Jogos e aplicativos podem usar ofertas com tempo curto para estimular compras rápidas.",
    items: [
      "Ofertas com contagem regressiva querem que você decida sem pensar. Você pode esperar um dia antes de comprar.",
      "Defina um limite de gasto por mês e anote.",
      "Ative, nas configurações da loja de aplicativos, a exigência de senha ou biometria para comprar.",
      "Não use o cartão de outra pessoa sem permissão.",
      "Não passe dados pessoais no chat do jogo.",
      "Se alguém oferecer presentes ou pedir segredo, bloqueie e conte para alguém de confiança."
    ]
  },
  {
    id: 6,
    icon: <FaBell />,
    title: "Notificações e foco",
    description: "Controle os avisos para ter mais calma e concentração.",
    color: "#FFF3B8",
    iconColor: "#854D0E",
    buttonColor: "#854D0E",
    modalAccent: "#854D0E",
    intro: "Notificações podem interromper o que você está fazendo e causar cansaço. Você pode escolher quais avisos recebe.",
    items: [
      "Desative as notificações de aplicativos que não são importantes.",
      "Use o modo Não perturbe ou Foco nos horários de estudo, trabalho ou descanso.",
      "Mantenha ligados só os avisos importantes, como mensagens de pessoas próximas.",
      "Escolha horários do dia para olhar as redes sociais, em vez de olhar o tempo todo.",
      "Faça pausas longe das telas quando sentir sobrecarga."
    ]
  }
];
