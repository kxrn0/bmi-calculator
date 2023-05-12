import { useState } from "react";
import SCCalculator from "./Calculator.styled";

export default function Calculator() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [units, setUnits] = useState("M");

  return (
    <SCCalculator>
      <h3>Enter your details below</h3>
      <div className="units">
        <label htmlFor="metric-option">
          <input type="radio" id="metric-option" />
          <span>Metric</span>
        </label>
        <label htmlFor="imperial-option">
          <input type="radio" id="imperial-option" />
          <span>Imperial</span>
        </label>
      </div>
      <div className="inputs">
        <label>
          <span>Height</span>
          {units === "M" ? (
            <span className="input">
              <input type="number" />
              <span>cm</span>
            </span>
          ) : (
            <span className="sub-inputs">
              <span className="input">
                <input type="number" />
                <span>ft</span>
              </span>
              <span className="input">
                <input type="number" />
                <span>in</span>
              </span>
            </span>
          )}
        </label>
        <label htmlFor="weight-input">
          <span>Weight</span>
        </label>
      </div>
    </SCCalculator>
  );
}
