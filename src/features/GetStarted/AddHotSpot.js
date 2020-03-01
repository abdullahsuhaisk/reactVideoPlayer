import React, { useEffect } from "react";
import { Input, StepController, InOutTime, Button } from "../../components";

export default function AddHotSpot(props) {
  useEffect(() => {
    props.setHeader("Add HotSpot");
    // console.log("setHeader");
  }, [props.currentStep]);
  return (
    <div>
      {props.state.hotspots.length > 0 ? (
        props.state.hotspots.map((item, index) => {
          return (
            <InOutTime
              key={index}
              deleteHotSpots={props.deleteHotSpots}
              item={item}
              deleteKey={index}
            />
          );
        })
      ) : (
        <InOutTime />
      )}
      <div
        style={{ width: "100%", display: "flex", flexDirection: "row-reverse" }}
      >
        <Button onClick={() => props.addEmptyHotSpot()}>More HotSpot </Button>
      </div>
      <StepController stepOptions={props} />
    </div>
  );
}
