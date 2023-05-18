import SCDefinition from "./Definition.styled";
import hair from "../../assets/images/pattern-curved-line-left.svg";
import man from "../../assets/images/image-man-eating.webp";

export default function Definition() {
  return (
    <SCDefinition>
      <img className="hair" src={hair} alt="decorative element" />
      <img className="man" src={man} alt="man eating" />
      <div className="description">
        <h2 className="heading-l color-gunmetal">What your BMI result means</h2>
        <p className="body-m color-dark-electric-blue">
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </SCDefinition>
  );
}
