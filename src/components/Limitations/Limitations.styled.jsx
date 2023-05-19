import styled from "styled-components";

const SCLimitations = styled.section`
  position: relative;
  margin: 0 0 640px 140px;

  .hair {
    position: absolute;
    top: 250px;
    left: 165px;

    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 35px;

    p {
      width: 565px;
    }

    @media screen and (max-width: 1024px) {
      gap: 32px;
      text-align: center;
    }
  }

  .limitations {
    position: absolute;
    top: 0;
    left: 200px;
    width: 960px;
    height: 705px;

    .limit-card {
      position: absolute;

      @media screen and (max-width: 1024px) {
        position: static;
      }
    }

    .limit-card:nth-child(1) {
      top: 0;
      right: 100px;
    }

    .limit-card:nth-child(2) {
      top: 265px;
      right: 400px;
    }

    .limit-card:nth-child(3) {
      top: 265px;
      right: 0;
    }

    .limit-card:nth-child(4) {
      left: 0;
      bottom: 0;
    }

    .limit-card:nth-child(5) {
      left: 400px;
      bottom: 0;
    }

    @media screen and (max-width: 1024px) {
      position: static;
      width: auto;
      height: auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      row-gap: 24px;
      column-gap: 15px;
      margin: 0 0 130px 0;

      & > :last-child {
        grid-column: 1 / span 2;
        justify-self: center;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 56px;
    /* margin: 0 0 130px 0; */
    margin: 0;
  }
`;

export default SCLimitations;
