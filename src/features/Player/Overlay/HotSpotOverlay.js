import React from "react";
import Box from "../../../components/Box";
import ProductList from "../Product/ProductList";

const HotSpotOverlay = ({ playedSeconds }) => {
  return (
    <div
      style={{ width: "100%", height: "100%", position: "relative" }}
      className="hotSpot-overlay"
    >
      <ProductList playedSeconds={playedSeconds} />
    </div>
  );
};

export default HotSpotOverlay;
