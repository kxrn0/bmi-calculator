import styled from "styled-components";

const SCTips = styled.section`
  padding: 70px 115px;
  padding-bottom: 95px;
  display: flex;
  gap: 32px;
  align-self: center;
  margin-bottom: 216px;
  position: relative;

  &::before {
    content: "";
    background: linear-gradient(
      290.1deg,
      #d6e6fe 0%,
      rgba(214, 252, 254, 0) 100%
    );
    position: absolute;
    inset: 0;
    border-radius: 35px;
    opacity: 0.25;
  }

  @media screen and (max-width: 1024px) {
    padding: 60px 43px;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 95px;
  }
`;

export default SCTips;
