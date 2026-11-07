import { RAINBOW_GRADIENT } from "../../theme/palette";

export default function ProgressBar({ currentStep, totalSteps }) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="progress-container" aria-hidden="true">
      <div
        className="progress-bar"
        style={{
          width: `${progress}%`,
          backgroundImage: RAINBOW_GRADIENT,
          backgroundSize: `${(100 / progress) * 100}% 100%`,
        }}
      />
    </div>
  );
}
