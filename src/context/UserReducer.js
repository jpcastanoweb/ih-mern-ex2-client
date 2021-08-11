const reducers = (globalState, action) => {
  switch (action.type) {
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

    default:
      return globalState
  }
}

export default reducers
