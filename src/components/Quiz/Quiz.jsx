import { useState } from "react";
import "./quiz.css";
import { quizQuestions } from "./quizData";
import QuestionCard from "./QuestionCard";
import ResultCard from "./ResultCard";
import Decoracao from "../Figuras/Figuras";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  function handleConfirm() {
    if (selectedOption === null || confirmed) return;
    setConfirmed(true);
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
  }

  function handleNext() {
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setConfirmed(false);
    } else {
      setFinished(true);
    }
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setConfirmed(false);
    setScore(0);
    setFinished(false);
  }

  return (
    <section className="quiz-section" id="quiz">

      <div className="quiz-header">
        <Decoracao tipo="lampada" />
        <span className="quiz-badge">Quiz</span>
        <h2>Teste o que você aprendeu</h2>
        <p>
          São {quizQuestions.length} perguntas. Não há limite de tempo e
          nenhuma resposta é obrigatória. Depois de cada resposta, você
          vê uma explicação.
        </p>
      </div>

      {finished ? (
        <ResultCard
          score={score}
          total={quizQuestions.length}
          onRestart={restartQuiz}
        />
      ) : (
        <QuestionCard
          question={quizQuestions[currentQuestion]}
          current={currentQuestion}
          total={quizQuestions.length}
          selected={selectedOption}
          confirmed={confirmed}
          onSelect={setSelectedOption}
          onConfirm={handleConfirm}
          onNext={handleNext}
        />
      )}

    </section>
  );
}
