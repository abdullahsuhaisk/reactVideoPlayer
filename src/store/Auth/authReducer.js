import { actions } from "./authActions";

const initialState = {
  isUserSignIn: false,
  error: null
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_SIGNIN:
      return { ...state, isUserSignIn: true };
    case actions.USER_SIGNOUT:
      return { ...state, isUserSignIn: false };
    case actions.USER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
