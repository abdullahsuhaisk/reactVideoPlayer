import { actionTypes } from "./playerActions";

const initialState = {
  url: "https://www.youtube.com/watch?v=yg3ntL3djrU",
  pip: false,
  playing: true,
  controls: true,
  light: false,
  volume: 0.8,
  muted: true,
  played: 0,
  playedSeconds:0,
  loaded: 0,
  duration: 0,
  playbackRate: 1.0,
  loop: false,
  seeking: false,
  playerStatus: null
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.URL:
      return { ...state, url: action.payload };
    case actionTypes.PLAYING:
      return { ...state, playing: action.payload };
    case actionTypes.VALUME:
      return { ...state, volume: action.payload };
    case actionTypes.MUTED:
      return { ...state, muted: !state.muted };
    case actionTypes.DURATION:
      return { ...state, duration: action.payload };
    case actionTypes.PROGRESS:
      return {
        ...state,
        played: action.payload.played,
        playedSeconds: action.payload.playedSeconds,
        loaded: action.payload.loaded,
        loadedSeconds: action.payload.loadedSeconds
      };
    default: {
      return state;
    }
  }
};

export default playerReducer;
