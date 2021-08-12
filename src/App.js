import "./App.css"

import { Switch, Route, BrowserRouter as Router } from "react-router-dom"

import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home"
import Header from "./components/Layout/Header"
import PrivateRoute from "./components/PrivateRoute"
import AuthRoute from "./components/AuthRoute"
import Billing from "./components/Dashboard/Billing"

import UserState from "./context/UserState"

function App() {
  return (
    <>
      <UserState>
        <Router>
          <Header />

          <Switch>
            {/* Private Routes */}
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/dashboard/billing" component={Billing} />

            {/* Public Routes */}
            <AuthRoute exact path="/login" component={Login} />
            <AuthRoute exact path="/register" component={Register} />

            {/* Public Routes */}
            <Route path="/" component={Home} />

            {/* 404 Not Found */}
          </Switch>
        </Router>
      </UserState>
    </>
  )
}

export default App
