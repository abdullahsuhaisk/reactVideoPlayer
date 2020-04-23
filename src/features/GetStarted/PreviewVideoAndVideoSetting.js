import React from "react";
import {
  StepController,
  ResponsivePlayer,
  MyReactPlayer
} from "../../components";

export default function PreviewVideo(props) {
  return (
    <>
      <div>
        <div>
          <MyReactPlayer />
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
