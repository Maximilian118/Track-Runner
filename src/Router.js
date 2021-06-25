import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Notfound from "./pages/NotFound"
import Splash from "./pages/Splash"
import Login from "./pages/Login"
import Forgot from "./pages/Forgot"
import ForgotSuccess from './pages/ForgotSuccess'
import Home from "./pages/Home"
import Settings from "./pages/Settings"

const Router = ({ user }) => 
  <Switch>
    {user.token && <Route exact path="/" component={Home}/>}
    {user.token && <Route exact path="/settings" component={Settings}/>}
    {!user.token && <Route exact path="/" component={Splash}/>}
    {!user.token && <Route exact path="/login" component={Login}/>}
    {!user.token && <Route exact path="/forgot" component={Forgot}/>}
    {!user.token && <Route exact path="/forgot-success" component={ForgotSuccess}/>}
    <Route component={Notfound}/>
  </Switch>

export default Router