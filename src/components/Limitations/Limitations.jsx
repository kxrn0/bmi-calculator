import LimitCard from "../LimitCard/LimitCard";
import SCLimitations from "./Limitations.styled";
import genderIcon from "../../assets/images/icon-gender.svg";
import ageIcon from "../../assets/images/icon-age.svg";
import muscleIcon from "../../assets/images/icon-muscle.svg";
import pregnancyIcon from "../../assets/images/icon-pregnancy.svg";
import raceIcon from "../../assets/images/icon-race.svg";
import hair from "../../assets/images/pattern-curved-line-right.svg";

export default function Limitations() {
  return (
    <SCLimitations>
      <img className="hair" src={hair} alt="decorative element" />
      <div className="description">
        <h2 className="heading-l color-gunmetal">Limitations of BMI</h2>
        <p className="body-m color-dark-electric-blue">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      <div className="limitations">
        <LimitCard
          icon={genderIcon}
          name="gender"
          description="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
        />
        <LimitCard
          icon={ageIcon}
          name="age"
          description="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
        />
        <LimitCard
          icon={muscleIcon}
          name="muscle"
          description="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
        />
        <LimitCard
          icon={pregnancyIcon}
          name="pregnancy"
          description="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
        />
        <LimitCard
          icon={raceIcon}
          name="race"
          description="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
        />
      </div>
    </SCLimitations>
  );
}
