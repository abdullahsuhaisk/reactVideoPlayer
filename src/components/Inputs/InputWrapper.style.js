import styled from "styled-components";

const inputStyle = {
  margin: "10px 0px",
  input: {
    height: 50,
    width: "100%",
    paddingLeft: 5,
    borderRadius: 5,
    outline: "none",
    backgroundColor: "#333",
    border: "none",
    color: "white",
    fontSize: "17px"
  }
};

export const Wrapper = styled.div(props => ({
  ...inputStyle,
  ...props.style
}));
