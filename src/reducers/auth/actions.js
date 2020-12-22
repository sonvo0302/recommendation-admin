import { authApi } from "../../services";

const NS = "@auth";

export const actionTypes = {
  LOGIN_REQUEST: `${NS}/LOGIN_REQUEST`,
  LOGIN_SUCCESS: `${NS}/LOGIN_SUCCESS`,
  LOGIN_ERROR: `${NS}/LOGIN_ERROR`,
};

const action = (type, payload) => ({ type, payload });

const actions = {
  login: ({ email, password }, history) => {
    console.log(email, " " , password);
    return (dispatch) => {
      dispatch(action(actionTypes.LOGIN_REQUEST));
      authApi
        .login({ email, password })
        .then((res) => {
          dispatch(action(actionTypes.LOGIN_SUCCESS, res));
          history.push("/");
          return res;
        })
        .catch((err) => {
          dispatch(action(actionTypes.LOGIN_ERROR, err));
          return err;
        });
    };
  },
};

export default actions;
