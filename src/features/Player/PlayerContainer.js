import React from "react";
import Player from ".";
import OverlayPortal from "../../components/OverlayPortal";
import { OverlayScreen } from "../../components/OverlayScreen";

const PlayerContainer = () => {
  // OverlayPortal make a new div inside Player
  return (
    <>
      <Player />
      <OverlayPortal>
        <OverlayScreen />
      </OverlayPortal>
    </>
  );
};
export default PlayerContainer;
