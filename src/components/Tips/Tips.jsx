import TipCard from "../TipCard/TipCard";
import SCTips from "./Tips.styled";
import eat from "../../assets/images/icon-eating.svg";
import exercise from "../../assets/images/icon-exercise.svg";
import sleep from "../../assets/images/icon-sleep.svg";

export default function Tips() {
  return (
    <SCTips>
      <TipCard
        image={eat}
        name="Healthy eating"
        description="Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."
      />
      <TipCard
        image={exercise}
        name="Regular exercise"
        description="Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."
      />
      <TipCard
        image={sleep}
        name="Adequate sleep"
        description="Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
      />
    </SCTips>
  );
}
