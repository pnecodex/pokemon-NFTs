import api from "./api/api";

export const adminLogin = (email,password) => async (dispatch) =>{
      try {
        dispatch({
          type:"ADMIN_LOGIN_REQUEST"
        });
        console.log(email,password,'email password');
        const {data} = await api('/admin/login','post',{email,password});
        dispatch({
          type:"ADMIN_LOGIN_SUCCESS",
          payload:data.admin
        });
        localStorage.setItem('token',data.token);
      } catch (error) {
        dispatch({
          type:"ADMIN_LOGIN_ERROR",
          payload:error.response
        });        
      }
}