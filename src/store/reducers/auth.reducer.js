import { SIGNUP } from "../actions/auth.action";

const initial_state = {
  token: null,
  userId: null,
};

const AuthReducer = (state = initial_state, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, token: action.token, userId: action.userId };
    default:
      return state;
  }
};

export default AuthReducer;
