export const adminReducer = (state = { admin: {} }, action) => {
  switch (action.type) {
    case "ADMIN_LOGIN_REQUEST":
      return {
        ...state,
        loading: true
      }
    case "ADMIN_LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuthenticated:true,
        admin:action.payload
      }
    case "ADMIN_LOGIN_FAIL":
      return {
        ...state,
        loading: false,
        isAuthenticated:false,
        admin:null,
        error:action.payload
      }
    default:
      return state;
  }
}