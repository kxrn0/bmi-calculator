import styled from "styled-components";

const SCLimitCard = styled.div`
  background: white;
  box-shadow: 16px 32px 56px rgba(143, 174, 207, 0.25);
  width: 365px;
  padding: 32px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .name {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  @media screen and (max-width: 1024px) {
    max-width: 335px;
  }

  @media screen and (max-width: 800px) {
    width: 330px;
  }
`;

export default SCLimitCard;
