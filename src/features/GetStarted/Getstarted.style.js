import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  .inputs {
    flex: 1;
    padding: 0px 5px;
    display: flex;
    justify-content: space-around;

    div {
      margin: 0px 5px 10px 0px;
      flex: 1;
    }
  }
  .video {
    flex: 1;
  }
`;
