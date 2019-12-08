import React from "react";
import { InjectLayoutProps } from "../store/layout/layoutProps";

const Scaler = props => {
  const { safeArea, width, height, baseWidth, baseHeight, children } = props;

  const scaleX = (width - (safeArea.left + safeArea.right)) / baseWidth;
  const scaleY = (height - (safeArea.top + safeArea.bottom)) / baseHeight;
  console.log(baseHeight);
  return (
    <div
      className="scaler"
      style={{
        width: `${baseWidth}px`,
        height: `${baseHeight}px`,
        transformOrigin: "left top",
        transform: `scaleX(${scaleX}) scaleY(${scaleY})`
      }}
    >
      {children}
    </div>
  );
};

export default InjectLayoutProps({
  selectProps: ({ safeArea, width, height, baseWidth, baseHeight }) => ({
    safeArea,
    width,
    height,
    baseWidth,
    baseHeight
  })
})(Scaler);
