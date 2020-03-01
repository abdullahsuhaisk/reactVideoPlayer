import React, { useEffect } from "react";
import { Input, StepController } from "../../components";

export default function AddVideoInfo(props) {
  console.log(props.state);
  // Header
  // VideoCategory

  useEffect(() => {
    props.setHeader("Add VideoInfo");
  }, [props.currentStep]);
  return (
    <div>
      <Input
        handleChange={e => props.handleChange(e, "header")}
        value={props.state.videoInfo.header}
        placeholder={"Video Header"}
        id={"videoInfo"}
      />
      <Input
        handleChange={e => props.handleChange(e, "category")}
        value={props.state.videoInfo.header}
        placeholder={"Video Category"}
        id={"videoInfo"}
      />
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
      OnStart
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
      User Can Close
      <StepController stepOptions={props} />
    </div>
  );
}
