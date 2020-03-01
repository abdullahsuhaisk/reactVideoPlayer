import styled from "styled-components";

const StepControllerStyle = {
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  margin: "12px 0px",
};

export const StepControllerWrapper = styled.div(props => ({
  ...StepControllerStyle,
  ...props.styles
}));
