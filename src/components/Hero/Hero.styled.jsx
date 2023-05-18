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
    }

    .hero-description {
      width: 465px;
    }
  }

  .calculator {
    position: absolute;
    top: 180px;
    left: 710px;
  }
`;

export default SCHero;
