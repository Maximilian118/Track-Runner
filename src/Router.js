import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Notfound from "./pages/NotFound"
import Splash from "./pages/Splash"
import Login from "./pages/Login"
import Home from './pages/Home'
import Settings from './pages/Settings'

const Router = ({ user }) => 
  <Switch>
    {user.token && <Route exact path="/" component={Home}/>}
    {user.token && <Route exact path="/settings" component={Settings}/>}
    {!user.token && <Route exact path="/" component={Splash}/>}
    {!user.token && <Route exact path="/login" component={Login}/>}
    <Route component={Notfound}/>
  </Switch>

export default Router