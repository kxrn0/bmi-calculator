import styled from "styled-components";

const SCCalculator = styled.div`
  background: white;
  box-shadow: 16px 32px 56px rgba(143, 174, 207, 0.25);
  width: fit-content;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;

  .units {
    display: flex;
    gap: 24px;

    label {
      flex-grow: 1;
      display: flex;
      align-items: center;
      gap: 18px;

      input[type="radio"] {
        appearance: none;
        width: 31px;
        height: 31px;
        border-radius: 100%;

        &:checked {
          background: var(--light-blue);
          display: grid;
          place-content: center;

          &::after {
            content: "";
            background: var(--blue);
            width: 15px;
            height: 15px;
            border-radius: 100%;
          }
        }
      }
    }
  }

  .inputs {
    display: flex;
    gap: 24px;

    &.I {
      flex-direction: column;
    }

    label {
      display: flex;
      flex-direction: column;
      gap: 8px;

      .input {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 24px;
        width: 240px;
        height: 70px;
        position: relative;
        border-radius: 12px;

        input[type="number"] {
          position: absolute;
          border: none;
          border-radius: 12px;
          inset: 0;
          width: 100%;
          height: 100%;
          padding: 20px 24px;
          -moz-appearance: textfield;
          margin: 0;

          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            appearance: none;
          }
        }

        span {
          position: relative;
        }
      }

      .sub-inputs {
        display: flex;
        gap: 24px;
      }
    }
  }

  .bottom-text {
    background: linear-gradient(90deg, #345ff7 0%, #587dff 100%);
    border-radius: 16px;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    display: flex;
    padding: 32px;

    &.welcome-message {
      flex-direction: column;
      gap: 16px;
    }

    &.results {
      gap: 100px;
      align-items: center;

      .bmi {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .ideal-range {
        max-width: 205px;
      }
    }
  }
`;

export default SCCalculator;
