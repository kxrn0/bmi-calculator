import styled from "styled-components";

const SCDefinition = styled.section`
  display: flex;
  gap: 130px;
  align-items: end;
  position: relative;
  width: fit-content;
  align-self: center;
  margin-bottom: 168px;

  .hair {
    position: absolute;
    bottom: 385px;
    right: 27px;
  }

  .man {
    width: 565px;
  }

  .description {
    position: relative;
    bottom: 40px;
    width: 465px;
    display: flex;
    flex-direction: column;
    gap: 35px;
  }
`;

export default SCDefinition;
