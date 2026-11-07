import { useState } from "react";
import TutorialCard from "./TutorialCard";
import TutorialModal from "./TutorialModal";
import { tutorials } from "./tutorialsData";
import Reveal from "../Reveal/Reveal";

export default function TutorialsSection() {
  const [selectedTutorial, setSelectedTutorial] = useState(null);

  return (
    <>
      <div className="tutorial-grid">
        {tutorials.map((tutorial, i) => (
          <Reveal key={tutorial.id} delay={(i % 3) * 90}>
            <TutorialCard tutorial={tutorial} onOpen={setSelectedTutorial} />
          </Reveal>
        ))}
      </div>

      <TutorialModal
        tutorial={selectedTutorial}
        onClose={() => setSelectedTutorial(null)}
      />
    </>
  );
}
