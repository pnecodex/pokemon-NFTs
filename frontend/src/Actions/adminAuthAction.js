import api from "./api/api";

export const adminLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "ADMIN_LOGIN_REQUEST"
    });
    console.log(email, password, 'email password');
    const { data } = await api('/admin/login', 'post', { email, password });
    dispatch({
      type: "ADMIN_LOGIN_SUCCESS",
      payload: data
    });
    localStorage.setItem('token', data.token);
  } catch (error) {
    dispatch({
      type: "ADMIN_LOGIN_ERROR",
      payload: error.response
    });
  }
}
export const adminLaod = () => async (dispatch) => {
  try {
    const data = localStorage.getItem('token');
    if (data === null) {
      console.log(data, 'null');
      dispatch({
        type: "ADMIN_LOAD_FAIL",
        payload: data
      });
    } else {
      dispatch({
        type: "ADMIN_LOAD_SUCCESS",
        payload: data
      });
    }


  } catch (error) {
    dispatch({
      type: "ADMIN_LOAD_ERROR",
      payload: error
    });
  }
}