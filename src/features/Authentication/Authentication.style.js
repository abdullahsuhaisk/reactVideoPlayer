import styled from "styled-components";

export const AuthWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .form-group {
    display: flex;
    flex-direction: column;
    margin: 5px;
    label {
      color: red;
    }
    input {
      padding: 10px;
    }
  }
`;
