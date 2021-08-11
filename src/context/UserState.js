import React, { useReducer } from "react"
import UserContext from "./UserContext"
import UserReducer from "./UserReducer"

import axiosClient from "./../config/axios"

const UserState = (props) => {
  const initialState = {
    user: {
      username: "",
      email: "",
    },
    authStatus: null,
    token: null,
  }

  const [globalState, dispatch] = useReducer(UserReducer, initialState)

  const registerUser = async (dataForm) => {
    console.log(dataForm)

    try {
      const res = await axiosClient.post("/api/users/register", dataForm)

      dispatch({
        type: "REGISTER_SUCCESS",
        payload: res.data,
      })
    } catch (error) {
      // console.log("Error registering user:", error.message)
      dispatch({
        type: "REGISTER_ERROR",
        payload: error,
      })
    }
  }

  const verifyingToken = async () => {
    const token = localStorage.getItem("token")

    // prepare petition
    if (token) {
      axiosClient.defaults.headers.common["x-auth-token"] = token
    } else {
      delete axiosClient.defaults.headers.common["x-auth-token"]
    }

    //send petition
    try {
      const res = await axiosClient.get("/api/auth")

      dispatch({
        type: "GET_USER_INFO",
        payload: res.data.userFound,
      })
    } catch (error) {}
  }

  return (
    <UserContext.Provider
      value={{
        user: globalState.user,
        authStatus: globalState.authStatus,
        token: globalState.token,
        registerUser,
        verifyingToken,
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState
