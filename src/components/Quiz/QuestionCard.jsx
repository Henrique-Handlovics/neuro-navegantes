import { RAINBOW_GRADIENT } from "../../theme/palette";

export default function QuestionCard({
  question,
  current,
  total,
  selected,
  confirmed,
  onSelect,
  onConfirm,
  onNext
}) {
  const progress = ((current + 1) / total) * 100;
  const isCorrect = selected === question.answer;
  const isLast = current === total - 1;

  function optionClass(index) {
    let name = "quiz-option";
    if (!confirmed && selected === index) name += " selected";
    if (confirmed && index === question.answer) name += " correct";
    if (confirmed && selected === index && index !== question.answer) name += " incorrect";
    return name;
  }

  return (
    <div className="quiz-card">

      <div className="quiz-progress" aria-hidden="true">
        <div className="quiz-progress-fill" style={{ width: `${progress}%`, backgroundImage: RAINBOW_GRADIENT, backgroundSize: `${(100 / progress) * 100}% 100%` }}></div>
      </div>

      <span className="quiz-counter">
        Pergunta {current + 1} de {total}
      </span>

      <h3 className="quiz-question">{question.question}</h3>

      <div className="quiz-options" role="group" aria-label="Opções de resposta">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={optionClass(index)}
            onClick={() => onSelect(index)}
            disabled={confirmed}
            aria-pressed={selected === index}
          >
            <span className="option-letter">{String.fromCharCode(65 + index)}</span>
            <span>{option}</span>
          </button>
        ))}
      </div>

      <div aria-live="polite">
        {confirmed && (
          <div className={`quiz-feedback ${isCorrect ? "ok" : "not-ok"}`}>
            <strong>
              {isCorrect
                ? "Resposta correta."
                : `A melhor opção era a letra ${String.fromCharCode(65 + question.answer)}.`}
            </strong>
            <p>{question.explanation}</p>
          </div>
        )}
      </div>

      {!confirmed ? (
        <button className="quiz-next" onClick={onConfirm} disabled={selected === null}>
          Confirmar resposta
        </button>
      ) : (
        <button className="quiz-next" onClick={onNext}>
          {isLast ? "Ver resultado" : "Próxima pergunta"}
        </button>
      )}

    </div>
  );
}
