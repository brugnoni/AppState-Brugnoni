import { URL_AUTH_KEY } from "../../constants/database";

export const SIGNUP = "SIGNUP";

export const signUp = (email, password) => {
  console.log(email, password);
  return async (dispatch) => {
    try {
      const res = await fetch(URL_AUTH_KEY, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
      const data = await res.json();
      dispatch({
        type: SIGNUP,
        token: data.idToken,
        userId: data.localId,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
