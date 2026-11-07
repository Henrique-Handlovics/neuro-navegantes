import { useEffect, useState } from "react";
import useEscape from "../../hooks/useEscape";
import ProgressBar from "./ProgressBar";
import TutorialStep from "./TutorialStep";

export default function TutorialModal({ tutorial, onClose }) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setCurrentStep(0);
  }, [tutorial]);

  useEscape(Boolean(tutorial), onClose);

  if (!tutorial) return null;

  const totalSteps = tutorial.steps.length;
  const isLast = currentStep === totalSteps - 1;

  function nextStep() {
    if (currentStep < totalSteps - 1) setCurrentStep(currentStep + 1);
  }

  function previousStep() {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  }

  return (
    <div className="tutorial-overlay" onClick={onClose}>

      <div
        className="tutorial-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="tutorial-title"
        onClick={(e) => e.stopPropagation()}
      >

        <button className="tutorial-close" onClick={onClose} aria-label="Fechar">
          ✕
        </button>

        <h2 id="tutorial-title">{tutorial.title}</h2>

        <p className="tutorial-counter">
          Passo {currentStep + 1} de {totalSteps}
        </p>

        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

        <TutorialStep step={tutorial.steps[currentStep]} currentStep={currentStep} />

        <div className="tutorial-buttons">
          <button onClick={previousStep} disabled={currentStep === 0}>
            Passo anterior
          </button>

          <button onClick={isLast ? onClose : nextStep}>
            {isLast ? "Concluir" : "Próximo passo"}
          </button>
        </div>

      </div>

    </div>
  );
}
