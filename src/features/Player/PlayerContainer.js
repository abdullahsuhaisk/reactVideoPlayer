import React from "react";
import Player from ".";
import OverlayPortal from "./Overlay/OverlayPortal";
import OverlayContainer from "./Overlay/OverlayContainer";

const PlayerContainer = () => {
  // OverlayPortal make a new div inside Player
  return (
    <>
      <Player />
      <OverlayPortal>
        <OverlayContainer />
      </OverlayPortal>
    </>
  );
};
export default PlayerContainer;
