export const adminAuthReducer = (state = { admin: {} }, action) => {
  switch (action.type) {
    case "ADMIN_LOGIN_REQUEST":
      return {
        loading: true,
        access: false,
      }
    case "ADMIN_LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        access: true,
        admin: action.payload
      }
    case "ADMIN_LOGIN_FAIL":
      return {
        loading: false,
        access: false,
        admin: null,
        error: action.payload
      }
    case "ADMIN_LOAD_FAIL":
      return {
        ...state,
        loading: false,
        access: false,
        admin: action.payload
      }
    case "ADMIN_LOAD_SUCCESS":
      return {
        ...state,
        loading: false,
        access: true,
        admin: action.payload
      }

    case "ADMIN_LOAD_ERROR":
      return {
        ...state,
        loading: false,
        access: false,
        admin: action.payload
      }
    default:
      return state;
  }
}