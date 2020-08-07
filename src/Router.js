import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Notfound from "./pages/NotFound"
import Splash from "./pages/Splash"

const Router = () => 
  <Switch>
    <Route exact path="/" component={Splash}/>
    <Route component={Notfound}/>
  </Switch>

export default Router