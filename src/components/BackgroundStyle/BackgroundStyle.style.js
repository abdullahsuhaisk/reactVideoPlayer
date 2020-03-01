import styled from "styled-components";

const backgroundStyle = {
  width: "100%",
  height: "93vh",
  position: "relative",
  background: "url(../image/background.jpg) no-repeat center center/cover",
  ".background-dark": {
    content: "",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "1",
    background: "rgba(0, 0, 0, 0.6)",
    boxShadow:
      "inset 120px 100px 250px #000000, inset -120px -100px 250px #000000"
  },
  ".ntflx-logo": {
    height: "90px",
    width: "100%",
    display: "flex",
    alignItems:'center',
    marginLeft:'10px',
    img: {
      height: "45px",
      width: "167px",
      verticalAlign: "middle"
    }
  },
  ".ntflx-left-logo": {},
  ".ntflx-right-logo": {},
  ".ntflx-middle-logo": {}
};

export const BackgroundWrapper = styled.header(props => ({
  ...backgroundStyle,
  ...props.styles
}));
