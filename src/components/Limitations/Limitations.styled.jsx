import styled from "styled-components";

const SCLimitations = styled.section`
  position: relative;
  margin: 0 0 640px 140px;

  .hair {
    position: absolute;
    top: 250px;
    left: 165px;
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 35px;

    p {
      width: 565px;
    }
  }

  .limitations {
    background-color: #ead3d399;
    position: absolute;
    top: 0;
    left: 200px;
    width: 960px;
    height: 705px;
  }
`;

export default SCLimitations;
