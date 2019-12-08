import React from "react";
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import { findDOMNode } from "react-dom";
import { InjectPlayerProps } from "../../store/Player/playerProps";

class Player extends React.Component {
  state = {
    pip: false,
    playing: true,
    controls: true,
    light: false,
    volume: 0.8,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false
  };

  ref = player => {
    this.player = player;
  };
  render() {
    const {
      url,
      duration,
      playing,
      volume,
      muted,
      onPlaying,
      onDuration,
      onProgress
    } = this.props;
    this.handleClickFullscreen = () => {
      screenfull.request(findDOMNode(this.player));
    };
    this.load = url => {
      this.setState({
        url,
        played: 0,
        loaded: 0,
        pip: false
      });
    };
    this.handleToggleControls = () => {
      const url = this.state.url;
      this.setState(
        {
          controls: !this.state.controls,
          url: null
        },
        () => this.load(url)
      );
    };
    this.handleSeekMouseDown = e => {
      this.setState({ seeking: true });
    };
    this.handleSeekChange = e => {
      this.setState({ played: parseFloat(e.target.value) });
    };
    this.handleSeekMouseUp = e => {
      this.setState({ seeking: false });
      this.player.seekTo(parseFloat(e.target.value));
    };
    this.handleProgress = state => {
      console.log("onProgress", state);
      onProgress(state);
      // We only want to update time slider if we are not currently seeking
      if (!this.state.seeking) {
        this.setState(state);
      }
    };
    this.handleEnded = () => {
      console.log("onEnded");
      this.setState({ playing: this.state.loop });
    };
    this.handleDuration = duration => {
      console.log("onDuration", duration);
      onDuration(duration);
      this.setState({ duration });
    };
    const {
      controls,
      light,
      loop,
      played,
      loaded,
      playbackRate,
      pip
    } = this.state;

    return (
      <div
        className="player"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%"
        }}
      >
        <ReactPlayer
          ref={this.ref}
          url={url}
          className="videoPlayer"
          width="100%"
          height="100%"
          pip={pip}
          playing={playing}
          controls={controls}
          light={light}
          loop={loop}
          playbackRate={playbackRate}
          volume={volume}
          muted={muted}
          onReady={() => console.log("onReady")}
          onStart={() => console.log("onStart")}
          onPlay={() => onPlaying(!playing)}
          onEnablePIP={this.handleEnablePIP}
          onDisablePIP={this.handleDisablePIP}
          onPause={() => onPlaying(false)}
          onBuffer={() => console.log("onBuffer")}
          onSeek={e => console.log("onSeek", e)}
          onEnded={this.handleEnded}
          onError={e => console.log("onError", e)}
          onProgress={this.handleProgress}
          onDuration={this.handleDuration}
        />
      </div>
    );
  }
}

export default InjectPlayerProps({
  selectProps: ({ url, duration, playing, volume, muted }) => ({
    url,
    duration,
    playing,
    volume,
    muted
  }),
  selectActions: ({ onPlaying, onDuration, onProgress }) => ({
    onPlaying,
    onProgress,
    onDuration
  })
})(Player);
