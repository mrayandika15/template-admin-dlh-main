import { authActions } from ".";
import { login } from "../../services";

export const loginAsnyc = (payload) => async (dispatch) => {
  const res = await login(payload);

  dispatch(authActions.login(res.jwt));
};
