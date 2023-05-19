import styled from "styled-components";

const SCHero = styled.main`
  background: linear-gradient(
    290.1deg,
    #d6e6fe 0%,
    rgba(214, 252, 254, 0) 100%
  );
  width: 980px;
  position: relative;
  left: 24px;
  display: flex;
  flex-direction: column;
  gap: 130px;
  padding: 75px 10px 195px 115px;
  border-bottom-right-radius: 35px;
  border-bottom-left-radius: 35px;
  margin-bottom: 65px;

  .logo {
    width: 64px;
    height: 64px;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 35px;

    .hero-title {
      width: 565px;

      @media screen and (max-width: 1024px) {
        width: auto;
      }
    }

    .hero-description {
      width: 465px;

      @media screen and (max-width: 1024px) {
        width: auto;
      }
    }

    @media screen and (max-width: 1024px) {
      gap: 24px;
    }

    @media screen and (max-width: 1024px) {
      gap: 24px;
    }
  }

  .calculator {
    position: absolute;
    top: 180px;
    left: 710px;

    @media screen and (max-width: 1024px) {
      left: 50%;
      transform: translateX(-50%);
      top: 355px;
    }

    @media screen and (max-width: 625px) {
      top: 495px;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 32px 40px;
    padding-bottom: 325px;
    width: 100%;
    height: 640px;
    top: 0;
    left: 0;
    align-items: center;
    gap: 40px;
    text-align: center;
    margin-bottom: 325px;
  }

  @media screen and (max-width: 800px) {
    gap: 24px;
    height: 640px;
    margin-bottom: 550px;
  }
`;

export default SCHero;
