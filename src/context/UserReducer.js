const reducers = (globalState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
    case "REGISTER_SUCCESS":
      localStorage.setItem("token", action.payload.token)

      return {
        ...globalState,
        authStatus: true,
        token: action.payload.token,
      }

    case "GET_USER_INFO":
      return {
        ...globalState,
        authStatus: true,
        user: action.payload,
      }

    case "SIGNOUT_USER":
      localStorage.removeItem("token")
      return {
        ...globalState,
        token: null,
        user: null,
        authStatus: null,
      }

    // case "CLEAN_USER_TOKEN":
    //   return {
    //     ...globalState,
    //     user: {
    //       username: "",
    //       email: "",
    //     },
    //     authStatus: false,
    //     token: null,
    //   }

    default:
      return globalState
  }
}

export default reducers
