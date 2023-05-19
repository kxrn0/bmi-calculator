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

        @media (hover: hover) {
          &:hover:not(:checked) {
            border: 1px solid var(--blue);
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

          &:focus {
            outline: 2px solid var(--blue);
          }

          @media (hover: hover) {
            &:hover:not(:focus) {
              outline: 1px solid var(--blue);
            }
          }
        }

        span {
          position: relative;
        }

        @media screen and (max-width: 1024px) {
          width: 300px;
        }

        @media screen and (max-width: 800px) {
          width: 280px;
        }
      }

      .sub-inputs {
        display: flex;
        gap: 24px;

        @media screen and (max-width: 800px) {
          .input {
            width: 132px;
          }
        }
      }

      @media screen and (max-width: 800px) {
        align-items: flex-start;
      }
    }

    @media screen and (max-width: 800px) {
      flex-direction: column;
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

      @media screen and (max-width: 800px) {
        flex-direction: column;
        gap: 24px;
        text-align: start;
        align-items: start;
      }
    }

    @media screen and (max-width: 800px) {
      border-radius: 16px;
    }
  }

  @media screen and (max-width: 1024px) {
    & > h3.heading-m {
      align-self: flex-start;
    }
  }

  @media screen and (max-width: 800px) {
    gap: 24px;
    padding: 24px;
  }
`;

export default SCCalculator;
