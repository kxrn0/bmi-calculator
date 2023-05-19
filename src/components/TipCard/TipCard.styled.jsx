import styled from "styled-components";

const SCTipCard = styled.div`
  width: 365px;
  display: flex;
  flex-direction: column;
  gap: 45px;
  position: relative;

  img {
    width: 64px;
  }

  .tip {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  @media screen and (max-width: 1024px) {
    width: auto;
    flex-direction: row;
    gap: 40px;
  }
`;

export default SCTipCard;
