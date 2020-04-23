import React, { Component } from "react";
import ReactPlayer from "react-player";

class ResponsivePlayer extends Component {
  render() {
    const styles = {
      "player-wrapper": {
        position: "relative",
        paddingTop: "56.25% " /* Player ratio: 100 / (1280 / 720) */
      },
      "react-player": {
        position: "absolute",
        top: 0,
        left: 0
      }
    };
    return (
      <div className="player-wrapper" style={styles["player-wrapper"]}>
        <ReactPlayer
          className="react-player"
          style={styles["react-player"]}
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}

export default ResponsivePlayer;
