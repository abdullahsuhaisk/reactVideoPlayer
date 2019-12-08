import { buildActionCreator } from "../propsUtils";
import {
  actionTypes as baseActionTypes,
  actions as baseActions
} from "../base/baseActions";

const PREFIX = "PLAYER";

const URL = `${PREFIX}_URL_CHANGED`;
const PLAYING = "PLAYING_STATE_CHANGED";
const VALUME = "VALUME_STATE_CHANGED";
const MUTED = "MUTED_STATE_CHANGED";
const DURATION = "DURATION";
const PROGRESS = "PROGRESS";

const onUrl = buildActionCreator(URL);
const onPlaying = buildActionCreator(PLAYING);
const onValume = buildActionCreator(VALUME);
const onMuted = buildActionCreator(MUTED);
const onDuration = buildActionCreator(DURATION);
const onProgress = buildActionCreator(PROGRESS);

export const actionTypes = {
  URL,
  PLAYING,
  VALUME,
  MUTED,
  DURATION,
  PROGRESS,
  ...baseActionTypes
};

export const actions = {
  onUrl,
  onPlaying,
  onValume,
  onMuted,
  onDuration,
  onProgress,
  ...baseActions
};

// const PREFIX = "VIDEOPLAYER";

// const VIDEOPLAYER_START = `${PREFIX}/START`;
// const VIDEOPLAYER_STOP = `${PREFIX}/STOP`;
// const VIDEOPLAYER_PAUSE = `${PREFIX}/PAUSE`;

// export const Actions = {};

// export const ActionTypes = {
//   VIDEOPLAYER_START,
//   VIDEOPLAYER_STOP,
//   VIDEOPLAYER_PAUSE
// };
