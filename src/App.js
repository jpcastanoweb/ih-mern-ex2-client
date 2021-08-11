import "./App.css"

import { Switch, Route, BrowserRouter as Router } from "react-router-dom"

import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home"

import Header from "./components/Layout/Header"

import UserState from "./context/UserState"

import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <>
      <UserState>
        <Router>
          <Header />

          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </UserState>
    </>
  )
}

export default App
