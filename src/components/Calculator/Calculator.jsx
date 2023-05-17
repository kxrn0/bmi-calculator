import { useState } from "react";
import SCCalculator from "./Calculator.styled";

export default function Calculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState({
    value: null,
    absoluteState: ">",
    idealRange: { min: 0, max: 0 },
  });
  const [units, setUnits] = useState("M");
  const emptyFields =
    (units === "M" && (!weight || !height)) ||
    (units === "I" &&
      ((!weight.stones && !weight.pounds) || (!height.feet && !height.inches)));

  function metric_weight_to_imperial(kilograms) {
    const kilogramsPerStone = 0.1575;
    const stones = Number((kilograms * kilogramsPerStone).toFixed(2));
    const pounds = Math.round(14 * (stones % 1));

    return `${~~stones}st ${pounds}lb`;
  }

  function toggle_units() {
    if (units === "M") {
      setHeight((prevHeight) => {
        const meters = prevHeight / 100;
        const inchesPerMeter = 39.37;
        const inchesPerFoot = 12;
        const minBmi = 18.5;
        const maxBmi = 24.9;
        const minWeight = (minBmi * prevHeight * prevHeight) / 1e4;
        const maxWeight = (maxBmi * prevHeight * prevHeight) / 1e4;
        const min = metric_weight_to_imperial(minWeight);
        const max = metric_weight_to_imperial(maxWeight);
        let inches, feet;

        inches = meters * inchesPerMeter;
        feet = inches / inchesPerFoot;
        inches = Math.round(inchesPerFoot * (feet % 1));
        feet = ~~feet;

        setBmi((prev) => ({ ...prev, idealRange: { min, max } }));

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
        const minBmi = 18.5;
        const maxBmi = 24.9;
        const min = `${(minBmi * meters * meters).toFixed(1)}kg`;
        const max = `${(maxBmi * meters * meters).toFixed(1)}kg`;

        setBmi((prev) => ({ ...prev, idealRange: { min, max } }));

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
    const type = target.dataset.measureType;
    const minBmi = 18.5;
    const maxBmi = 24.9;
    let bmi, idealRange;

    if (units === "M") {
      if (type === "weight") {
        bmi = (1e4 * number) / (height * height);
        idealRange = {
          min: `${((minBmi * (height * height)) / 1e4).toFixed(1)}kg`,
          max: `${((maxBmi * (height * height)) / 1e4).toFixed(1)}kg`,
        };
      } else {
        bmi = (1e4 * weight) / (number * number);
        idealRange = {
          min: `${((minBmi * (number * number)) / 1e4).toFixed(1)}`,
          max: `${((maxBmi * number * number) / 1e4).toFixed(1)}`,
        };
      }

      setter(value ? number : value);
    } else {
      const name = target.name;
      const inchesPerFoot = 12;
      const feetPerMeter = 3.28;
      const inchesPerMeter = 39.37;
      const kilogramsPerStone = 0.1575;
      const poundsPerKilogram = 2.2046;
      let minWeight, maxWeight;

      if (type === "weight") {
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

        minWeight = minBmi * meters * meters;
        maxWeight = maxBmi * meters * meters;
        bmi = kilograms / (meters * meters);
      } else {
        const kilograms =
          weight.stones / kilogramsPerStone + weight.pounds / poundsPerKilogram;
        let meters;

        if (name === "feet")
          meters = number / feetPerMeter + height.inches / inchesPerMeter;
        else meters = height.feet / feetPerMeter + number / inchesPerMeter;

        minWeight = minBmi * meters * meters;
        maxWeight = maxBmi * meters * meters;
        bmi = kilograms / (meters * meters);
      }

      idealRange = {
        min: metric_weight_to_imperial(minWeight),
        max: metric_weight_to_imperial(maxWeight),
      };
      setter((prev) => ({ ...prev, [name]: value ? number : value }));
    }

    bmi = Number(bmi.toFixed(2));
    setBmi((prev) => ({ ...prev, value: bmi, idealRange }));
  }

  return (
    <SCCalculator>
      <h3 className="heading-m color-gunmetal">Enter your details below</h3>
      <div className="units">
        <label htmlFor="metric-option">
          <input
            className="gray-border"
            type="radio"
            id="metric-option"
            checked={units === "M"}
            onChange={toggle_units}
            name="units"
          />
          <span className="body-m-bold color-gunmetal">Metric</span>
        </label>
        <label htmlFor="imperial-option">
          <input
            className="gray-border"
            type="radio"
            id="imperial-option"
            checked={units === "I"}
            onChange={toggle_units}
            name="units"
          />
          <span className="body-m-bold color-gunmetal">Imperial</span>
        </label>
      </div>
      <div className={`inputs ${units}`}>
        <label>
          <span className="body-s color-dark-electric-blue">Height</span>
          {units === "M" ? (
            <span className="input gray-border">
              <input
                className="heading-m color-gunmetal"
                type="number"
                placeholder="0"
                value={height}
                onChange={(event) => change_input(event, setHeight)}
                data-measure-type="height"
              />
              <span className="heading-m color-blue">cm</span>
            </span>
          ) : (
            <span className="sub-inputs">
              <span className="input gray-border">
                <input
                  className="heading-m color-gunmetal"
                  type="number"
                  placeholder="0"
                  name="feet"
                  value={height.feet}
                  onChange={(event) => change_input(event, setHeight)}
                  data-measure-type="height"
                />
                <span className="heading-m color-blue">ft</span>
              </span>
              <span className="input gray-border">
                <input
                  className="heading-m color-gunmetal"
                  type="number"
                  placeholder="0"
                  name="inches"
                  value={height.inches}
                  onChange={(event) => change_input(event, setHeight)}
                  data-measure-type="height"
                />
                <span className="heading-m color-blue">in</span>
              </span>
            </span>
          )}
        </label>
        <label htmlFor="weight-input">
          <span className="body-s color-dark-electric-blue">Weight</span>
          {units === "M" ? (
            <span className="input gray-border">
              <input
                className="heading-m color-gunmetal"
                type="number"
                placeholder="0"
                value={weight}
                onChange={(event) => change_input(event, setWeight)}
                data-measure-type="weight"
              />
              <span className="heading-m color-blue">kg</span>
            </span>
          ) : (
            <span className="sub-inputs">
              <span className="input gray-border">
                <input
                  className="heading-m color-gunmetal"
                  type="number"
                  placeholder="0"
                  value={weight.stones}
                  name="stones"
                  onChange={(event) => change_input(event, setWeight)}
                  data-measure-type="weight"
                />
                <span className="heading-m color-blue">st</span>
              </span>
              <span className="input gray-border">
                <input
                  className="heading-m color-gunmetal"
                  type="number"
                  placeholder="0"
                  value={weight.pounds}
                  name="pounds"
                  onChange={(event) => change_input(event, setWeight)}
                  data-measure-type="weight"
                />
                <span className="heading-m color-blue">lb</span>
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
            between {bmi.idealRange.min} - {bmi.idealRange.max}.
          </p>
        </div>
      )}
    </SCCalculator>
  );
}
