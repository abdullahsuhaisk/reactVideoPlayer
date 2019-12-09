import React, { useRef, useEffect, useCallback, useState } from "react";
import ReactDOM from "react-dom";
import ResizeSensor from "css-element-queries/src/ResizeSensor";
import { throttle } from "lodash";
import { compose } from "redux";
import { InjectLayoutProps } from "../store/layout/layoutProps";

const aspectRatio = 1.777;
const modalRoot = document.getElementsByClassName("player")[0];
// console.log(modalRoot);

const OverlayPortal = ({
  container,
  aspectRatio,
  onWidth,
  onHeight,
  onSafeArea,
  children
}) => {
  const [root, setRoot] = useState();
  // Which element, overlay should be inject
  const containerRef = useRef(null);

  useEffect(() => {
    setRoot(document && document.getElementsByClassName("player")[0]);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      console.log(containerRef.current);
      updateLayout();
      // eslint-disable-next-line no-new
      new ResizeSensor(containerRef.current, throttle(updateLayout, 100));
    }
  }, [root]);

  const top = 0;
  const right = 0;
  const bottom = 0;
  const left = 0;
  // const containerRef = useRef(null);

  const updateLayout = useCallback(() => {
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;
    const containerAspectRatio = containerWidth / containerHeight;

    if (aspectRatio) {
      if (containerAspectRatio >= aspectRatio) {
        const width = containerHeight * aspectRatio;
        const rightLeftMargin = Math.round((containerWidth - width) / 2);
        onSafeArea({
          top,
          right: rightLeftMargin,
          bottom,
          left: rightLeftMargin
        });
      } else {
        const height = containerWidth / aspectRatio;
        const topBottomMargin = Math.round((containerHeight - height) / 2);
        onSafeArea({
          top: topBottomMargin,
          right,
          bottom: topBottomMargin,
          left
        });
      }
    }

    onWidth(containerWidth);
    onHeight(containerHeight);
  }, []);

  if (root) {
    console.log(root);
    console.log(containerRef);
    return ReactDOM.createPortal(
      <div
        ref={containerRef}
        className="overlay-portal"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "auto",
          width: "100%",
          height: "90%"
        }}
      >
        {children}
      </div>,
      root
    );
  } else return null;
};

export default compose(
  InjectLayoutProps({
    selectProps: ({ aspectRatio }) => ({
      aspectRatio
    }),
    selectActions: ({ onWidth, onHeight, onSafeArea }) => ({
      onWidth,
      onHeight,
      onSafeArea
    })
  })
)(OverlayPortal);

// export default compose(
//   InjectPlayerProps({
//     selectProps: ({ overlayContainerClass }) => {
//       const container = document.getElementsByClassName(overlayContainerClass);
//       return { container: container.length > 0 ? container[0] : null };
//     }
//   }),
//   InjectLayoutProps({
//     selectProps: ({ aspectRatio }) => ({
//       aspectRatio
//     }),
//     selectActions: ({ onWidth, onHeight, onSafeArea }) => ({
//       onWidth,
//       onHeight,
//       onSafeArea
//     })
//   })
// )(OverlayPortal);
