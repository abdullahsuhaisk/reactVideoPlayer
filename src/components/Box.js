import React, { Component } from "react";
import screenfull from "screenfull";
import { findDOMNode } from "react-dom";

export default class Box extends Component {
    ref = div => {
        this.div = div;
    };
    handleClickFullscreen = () => {
        console.log('abc')
        screenfull.request(findDOMNode(this.player));
      };
  render() {
    return (
      <div
      onClick={() =>this.handleClickFullscreen()}
      ref={this.ref}
        className="box"
        style={{
          width: "100px",
          height: "150px",
          backgroundColor: "yellow"
        }}
      ></div>
    );
  }
}
