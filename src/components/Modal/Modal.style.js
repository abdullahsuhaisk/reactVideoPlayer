import styled from "styled-components";
import { DARKCOLOR } from "../CssConstant";

const ModalStyle = {
  width: "80%",
  minHeight: "50vh",
  margin: "auto",
  //   position: `${props.show ? "relative" :'none'}`,
  position: "relative",
  background: `${DARKCOLOR}`,
  backgroundColor: "rgba(0,0,0,0.75)",
  padding: "20px",
  ".modal-background": {
    minHeight: "50vh",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(50,50,50,0.75)",
    borderRadius: 10,
    padding: "10px"
  },
  ".modal-header": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "30ox"
  },
  ".modal-content": {},
  "modal-footer": {}
};

export const ModalWrapper = styled.div(props => {
  // console.log(props);
  return {
    ...ModalStyle,
    ...props.styles
  };
});
