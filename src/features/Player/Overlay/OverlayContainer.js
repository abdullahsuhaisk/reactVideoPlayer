import React from "react";
// import Scaler from "./Scaler";
import { InjectPlayerProps } from "../../../store/Player/playerProps";
import { PlayingOverlayContainer } from "./PlayingOverlayContainer";
import { PausedOverlayContainer } from "./PausedOverlayContainer";
import HotSpotOverlay from "./HotSpotOverlay";

const OverlayContainer = ({ playing, playedSeconds }) => {
  console.log(playedSeconds);
  return (
    <div
      style={{
        height: "100%",
        witdh: "100%",
        position: "relative"
      }}
      className="overlay-container"
    >
      {playing === true ? (
        <PlayingOverlayContainer />
      ) : (
        <PausedOverlayContainer />
      )}
      <HotSpotOverlay />
    </div>
  );
};
export default InjectPlayerProps({
  selectProps: ({ playing, playedSeconds }) => ({
    playing,
    playedSeconds
  })
})(OverlayContainer);
