import React from "react";
import Box from "../../../components/Box";
import ProductList from "../Product/ProductList";

export const PausedOverlayContainer = () => {
  return (
    <div
      style={{ width: "100%", height: "100%", position: "absolute" }}
      className="paused-overlay"
    >
      {/* <ProductList /> */}
    </div>
  );
};
