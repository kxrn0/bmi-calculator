import Calculator from "../Calculator/Calculator";
import SCHero from "./Hero.styled";
import logo from "../../assets/images/logo.svg";

export default function Hero() {
  return (
    <SCHero>
      <img src={logo} alt="company logo" className="logo" />
      <div className="container">
        <h1 className="hero-title heading-xl color-gunmetal">
          Body Mass Index Calculator
        </h1>
        <p className="hero-description body-m color-dark-electric-blue">
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>
      <Calculator />
    </SCHero>
  );
}
