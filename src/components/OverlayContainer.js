import React from "react";
import Scaler from "./Scaler";
import Box from "./Box";
import { InjectPlayerProps } from "../store/Player/playerProps";
import { PlayingOverlayContainer } from "../features/Player/Overlay/PlayingOverlayContainer";
import { PausedOverlayContainer } from "../features/Player/Overlay/PausedOverlayContainer";

const OverlayContainer = ({ playing }) => {
  return (
    <div
      style={{
        height: "100%",
        witdh: "100%"
      }}
      className="overlay-container"
    >
      {playing === true ? (
        <PlayingOverlayContainer />
      ) : (
        <PausedOverlayContainer />
      )}
    </div>
  );
};
export default InjectPlayerProps({
  selectProps: ({ playing }) => ({
    playing
  })
})(OverlayContainer);
