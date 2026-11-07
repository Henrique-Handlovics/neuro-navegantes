# Neuro Navegantes

Site educativo de segurança digital para pessoas neurodivergentes (React + Vite).
Linguagem direta, visual calmo e painel de acessibilidade.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente http://localhost:5173).

## Gerar versão de produção

```bash
npm run build
npm run preview
```

## Onde editar o conteúdo

| O que | Arquivo |
|---|---|
| Temas (cards e janelas) | `src/components/Assuntos/assuntosData.jsx` |
| Vídeos (trocar links e durações) | `src/components/Videos/videosData.jsx` |
| Tutoriais | `src/components/Tutorial/tutorialsData.jsx` |
| Situações de risco | `src/components/Seguranca/golpesData.jsx` |
| Perguntas do quiz | `src/components/Quiz/quizData.js` |
| Cores e fontes | `src/index.css` (variáveis em `:root`) e `src/colorido.css` |
| Paleta dos cards | `src/theme/palette.js` |
| Figuras decorativas (infinito, cérebro, estrelas...) | `src/components/Figuras/Figuras.jsx` |
| Painel de acessibilidade | `src/components/Acessibilidade/` |
| Ilustração do topo | `src/assets/hero-illustration.svg` |
| Logo da Unisanta | coloque `logo-unisanta.png` em `src/assets` |
