export default function TutorialStep({ step, currentStep }) {
  return (
    <div className="tutorial-step">
      <span>{currentStep + 1}</span>
      <p>{step}</p>
    </div>
  );
}
