import styled from "styled-components";

const SCDefinition = styled.section`
  display: flex;
  gap: 130px;
  align-items: end;
  position: relative;
  width: fit-content;
  align-self: center;
  margin-bottom: 95px;

  .hair {
    position: absolute;
    bottom: 385px;
    right: 27px;

    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  .man {
    width: 565px;

    @media screen and (max-width: 1024px) {
      width: 435px;
      position: absolute;
      right: 450px;
    }

    @media screen and (max-width: 800px) {
      width: 100%;
      position: static;
    }
  }

  .description {
    position: relative;
    bottom: 40px;
    width: 465px;
    display: flex;
    flex-direction: column;
    gap: 35px;

    @media screen and (max-width: 1024px) {
      bottom: auto;
      width: 330px;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    justify-content: flex-end;
    padding-right: 43px;
  }

  @media screen and (max-width: 800px) {
    gap: 50px;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;

export default SCDefinition;
