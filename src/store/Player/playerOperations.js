import { actions } from "./playerActions";

export const onUrl = URL => {
  return dispatch => {
    dispatch(actions.onUrl(URL));
  };
};

export const onPlaying = bool => {
  return dispatch => {
    dispatch(actions.onPlaying(bool));
  };
};

export const onValume = value => {
  return dispatch => {
    dispatch(actions.onValume(value));
  };
};

export const onMuted = bool => {
  return dispatch => {
    dispatch(actions.onMuted(bool));
  };
};

export const onDuration = value => {
  return dispatch => {
    dispatch(actions.onDuration(value));
  };
};

export const onProgress = obje => {
  return dispatch => {
    dispatch(actions.onProgress(obje));
  };
};