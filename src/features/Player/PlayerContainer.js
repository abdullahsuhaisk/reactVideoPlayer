import React from "react";
import Player from ".";
import OverlayPortal from "../../components/OverlayPortal";
import OverlayContainer from "../../components/OverlayContainer";

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
