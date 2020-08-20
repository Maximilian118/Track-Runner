import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Notfound from "./pages/NotFound"
import Splash from "./pages/Splash"
import Login from "./pages/Login"
import Home from './pages/Home'

const Router = ({ user }) => 
  <Switch>
    {user.token ? 
      <Route exact path="/" component={Home}/> 
    : 
      <>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/" component={Splash}/>
      </>
    }
    <Route component={Notfound}/>
  </Switch>

export default Router