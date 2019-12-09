import { InjectProps } from "../propsUtils";
import {
  onDuration,
  onPlaying,
  onValume,
  onUrl,
  onMuted,
  onProgress,
  onPlayerStatusChange
} from "./playerOperations";

function mapStateToProps(state) {
  return {
    url: state.player.url,
    playing: state.player.playing,
    volume: state.player.volume,
    muted: state.player.muted,
    duration: state.player.duration,
    played: state.player.played,
    playedSeconds: state.player.playedSeconds
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDuration: value => dispatch(onDuration(value)),
    onPlaying: bool => dispatch(onPlaying(bool)),
    onValume: value => dispatch(onValume(value)),
    onUrl: url => dispatch(onUrl(url)),
    onMuted: () => dispatch(onMuted()),
    onProgress: obje => dispatch(onProgress(obje)),
    onPlayerStatusChange: value => dispatch(onPlayerStatusChange(value))
  };
}
export const InjectPlayerProps = InjectProps(
  {
    mapDispatchToProps,
    mapStateToProps
  },
  "InjectPlayerProps"
);
