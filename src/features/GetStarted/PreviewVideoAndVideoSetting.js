import React from "react";
import { StepController, BasicVideoPlayer } from "../../components";

export default function PreviewVideo(props) {
  return (
    <>
      <div>
        <div style={{ width: 640, height: 640 }}>
          <BasicVideoPlayer />
        </div>
        <h2> Video Player Basic Settings</h2>
        <ul>
          <li>Full Screeneable</li>
          <li>is Requiered HotSpot</li>
          <li>Something may be private</li>
          <li>HotSpot type ?</li>
          <li>Can go direct from origin url</li>
        </ul>
        <StepController stepOptions={props} />

      </div>
    </>
  );
}
