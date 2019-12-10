import {
  actionTypes as baseActionTypes,
  actions as baseActions
} from "../base/baseActions";

const USER_SIGNIN = "USER_SIGN_IN";
const USER_SIGNOUT = "USER_SIGN_OUT";
const USER_ERROR = "USER_ERROR";

export const actions = {
  USER_SIGNIN,
  USER_SIGNOUT,
  USER_ERROR,
  ...baseActionTypes
};
