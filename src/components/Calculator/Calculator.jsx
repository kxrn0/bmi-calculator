import { useState } from "react";
import SCCalculator from "./Calculator.styled";

export default function Calculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState({ value: null, absoluteState: ">" });
  const [idealRange, setIdealRange] = useState({ min: 0, max: 0 });
  const [units, setUnits] = useState("M");
  const emptyFields =
    (units === "M" && !weight && !height) ||
    (units === "I" &&
      !weight.stones &&
      !weight.pounds &&
      !height.feet &&
      !height.inches);

  // function calculate_bmi(data) {
  //   const { weight, height, units } = data;

  //   console.log(data);

  //   if (!height || (!height.feet && !height.inches)) return null;

  //   if (units === "M") {
  //     const meters = height / 100;
  //     const bmi = weight / (meters * meters);

  //     return bmi;
  //   } else {
  //     const inchesPerFoot = 12;
  //     const poundsPerStone = 14;
  //     const inchesPerMeter = 39.37;
  //     const poundsPerKilogram = 2.2046;
  //     const inches = height.inches + height.feet * inchesPerFoot;
  //     const pounds = weight.pounds + weight.stones * poundsPerStone;
  //     const meters = inches / inchesPerMeter;
  //     const kilograms = pounds / poundsPerKilogram;
  //     const bmi = kilograms / (meters * meters);

  //     return bmi;
  //   }
  // }

  function toggle_units() {
    if (units === "M") {
      setHeight((prevHeight) => {
        const meters = prevHeight / 100;
        const inchesPerMeter = 39.37;
        const inchesPerFoot = 12;
        let inches, feet;

        inches = meters * inchesPerMeter;
        feet = inches / inchesPerFoot;
        inches = Math.round(inchesPerFoot * (feet % 1));
        feet = ~~feet;

        return { feet, inches };
      });
      setWeight((prevWeight) => {
        const kilogramsPerStone = 0.1575;
        const poundsPerStone = 14;
        let stones, pounds;

        stones = prevWeight * kilogramsPerStone;
        pounds = Math.round(poundsPerStone * (stones % 1));
        stones = ~~stones;

        return { stones, pounds };
      });
      setUnits("I");
    } else {
      setHeight((prevHeight) => {
        const inchesPerFoot = 12;
        const inchesPerMeter = 39.37;
        const centimetersPerMeter = 100;
        const inches = prevHeight.inches + inchesPerFoot * prevHeight.feet;
        const meters = inches / inchesPerMeter;
        const centimeters = Math.round(meters * centimetersPerMeter);

        return centimeters;
      });
      setWeight((prevWeight) => {
        const poundsPerStone = 14;
        const poundsPerKilogram = 2.2046;
        const pounds = prevWeight.pounds + poundsPerStone * prevWeight.stones;
        const kilograms = Math.round(pounds / poundsPerKilogram);

        return kilograms;
      });
      setUnits("M");
    }
  }

  function change_input(event, setter) {
    const target = event.target;
    const value = target.value;
    const number = Number(value);
    const type = event.target.dataset.measureType;
    let bmi;

    if (units === "M") {
      if (type === "weight") bmi = number / (height * height);
      else bmi = weight / (number * number);

      setBmi((prev) => ({ ...prev, value: bmi }));
      setter(value ? number : value);
    } else {
      const name = target.name;

      if (type === "weight") {
        const inchesPerFoot = 12;
        const inchesPerMeter = 39.37;
        const kilogramsPerStone = 0.1575;
        const poundsPerKilogram = 2.2046;
        const meters =
          (height.feet * inchesPerFoot) / inchesPerMeter +
          height.inches / inchesPerMeter;
        let kilograms;

        if (name === "stones") {
          kilograms =
            number / kilogramsPerStone + weight.pounds / poundsPerKilogram;
        } else {
          kilograms =
            weight.stones / kilogramsPerStone + number / poundsPerKilogram;
        }

        bmi = kilograms / (meters * meters);
        setBmi((prev) => ({ ...prev, value: bmi }));
      } else {
      }

      setter((prev) => ({ ...prev, [name]: value ? number : value }));
    }

    setBmi(bmi);
  }

  return (
    <SCCalculator>
      <button
        onClick={() => {
          console.log(weight);
          console.log(height);
        }}
      >
        measures
      </button>
      <h3>Enter your details below</h3>
      <div className="units">
        <label htmlFor="metric-option">
          <input
            type="radio"
            id="metric-option"
            checked={units === "M"}
            onChange={toggle_units}
          />
          <span>Metric</span>
        </label>
        <label htmlFor="imperial-option">
          <input
            type="radio"
            id="imperial-option"
            checked={units === "I"}
            onChange={toggle_units}
          />
          <span>Imperial</span>
        </label>
      </div>
      <div className="inputs">
        <label>
          <span>Height</span>
          {units === "M" ? (
            <span className="input">
              <input
                type="number"
                placeholder="0"
                value={height}
                onChange={(event) => change_input(event, setHeight)}
                data-measure-type="height"
              />
              <span>cm</span>
            </span>
          ) : (
            <span className="sub-inputs">
              <span className="input">
                <input
                  type="number"
                  placeholder="0"
                  name="feet"
                  value={height.feet}
                  onChange={(event) => change_input(event, setHeight)}
                  data-measure-type="height"
                />
                <span>ft</span>
              </span>
              <span className="input">
                <input
                  type="number"
                  placeholder="0"
                  name="inches"
                  value={height.inches}
                  onChange={(event) => change_input(event, setHeight)}
                  data-measure-type="height"
                />
                <span>in</span>
              </span>
            </span>
          )}
        </label>
        <label htmlFor="weight-input">
          <span>Weight</span>
          {units === "M" ? (
            <span className="input">
              <input
                type="number"
                placeholder="0"
                value={weight}
                onChange={(event) => change_input(event, setWeight)}
                data-measure-type="weight"
              />
              <span>kg</span>
            </span>
          ) : (
            <span className="sub-inputs">
              <span className="input">
                <input
                  type="number"
                  placeholder="0"
                  value={weight.stones}
                  name="stones"
                  onChange={(event) => change_input(event, setWeight)}
                  data-measure-type="weight"
                />
                <span>st</span>
              </span>
              <span className="input">
                <input
                  type="number"
                  placeholder="0"
                  value={weight.pounds}
                  name="pounds"
                  onChange={(event) => change_input(event, setWeight)}
                  data-measure-type="weight"
                />
                <span>lb</span>
              </span>
            </span>
          )}
        </label>
      </div>
      {emptyFields ? (
        <div className="welcome-mesage">
          <h3>Welcome</h3>
          <p>
            Enter your height and weight and you’ll see your BMI result here
          </p>
        </div>
      ) : (
        <div className="results">
          <div className="bmi">
            <p>Your BMI is...</p>
            <h1>{bmi.value}</h1>
          </div>
          <p className="ideal-range">
            Your BMI suggests you’re {bmi.absoluteState}. Your ideal weight is
            between {idealRange.min} - {idealRange.max}.
          </p>
        </div>
      )}
    </SCCalculator>
  );
}
