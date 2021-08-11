// UserState.js

// import React, { useReducer } from "react"
import React from "react"
import UserContext from "./UserContext"
// import UserReducer from "./UserReducer"

import axios from "axios"

const UserState = (props) => {
  //   const initialState = {
  //     user: {
  //       username: "",
  //       email: "",
  //     },
  //   }

  const registerUser = async (dataForm) => {
    console.log(dataForm)

    const res = await axios.post(
      "http://localhost:3001/api/users/register",
      dataForm
    )
    console.log(res)
  }

  return (
    <UserContext.Provider
      value={{
        user: "",
        registerUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState
