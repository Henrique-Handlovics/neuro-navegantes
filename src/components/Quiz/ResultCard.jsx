export default function ResultCard({ score, total, onRestart }) {
  const percentage = (score / total) * 100;

  let title = "";
  let message = "";

  if (percentage === 100) {
    title = "Excelente trabalho";
    message = "Você acertou todas as perguntas. Você já conhece bem os cuidados básicos de segurança digital.";
  } else if (percentage >= 70) {
    title = "Muito bem";
    message = "Você acertou a maior parte. Se quiser, releia os temas em que teve dúvida.";
  } else if (percentage >= 40) {
    title = "Bom começo";
    message = "Você já sabe alguns cuidados importantes. Releia os temas e os tutoriais no seu ritmo e tente de novo quando quiser.";
  } else {
    title = "Continue no seu ritmo";
    message = "Errar faz parte de aprender. Releia os temas e os tutoriais com calma e tente de novo quando quiser.";
  }

  return (
    <div className="result-card">

      <div className="result-score" aria-hidden="true">
        {score}/{total}
      </div>

      <h3>{title}</h3>

      <p className="result-summary">
        Você acertou {score} de {total} perguntas.
      </p>

      <p>{message}</p>

      <button className="restart-btn" onClick={onRestart}>
        Refazer o quiz
      </button>

    </div>
  );
}
