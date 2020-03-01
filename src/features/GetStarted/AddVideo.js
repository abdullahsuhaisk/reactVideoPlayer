import React, { useEffect } from "react";
import { Input, ReactPlayer, StepController } from "../../components";

export default function AddVideo(props) {
  useEffect(() => {
    props.setHeader("Add Video");
    // console.log('setHeader3');
  }, [props.currentStep]);

  // @TODO: You should add Input check method to Util

  return (
    <div className="getStarted-addVideo">
      <div className="video">
        <div>
          <Input
            handleChange={props.handleChange}
            value={props.state.url}
            placeholder={"Video Link"}
            id={"url"}
          />
        </div>
        <div
          className="video"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ReactPlayer url={props.state.url} />
        </div>
        <StepController stepOptions={props} />
      </div>
    </div>
  );
}
