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
        /* width: 240px;
        height: 70px; */

        input[type="number"] {
          background: yellowgreen;
          /* width: auto; */
          /* width: 100px; */
        }
      }

      .sub-inputs {
        display: flex;
        gap: 24px;
      }
    }
  }
`;

export default SCCalculator;
