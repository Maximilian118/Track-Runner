import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const Nav = ({ user, history }) => 
  <nav>
    <div className="nav-top">
      <Link to="/"><h1>Track-Runner</h1></Link>
      <div className="nav-top-right">
        {history.location.pathname === "/" ? 
          <Link to="/login"><h5>Login</h5></Link> :
          <Link to="/"><h5>Create An Account</h5></Link>
        }
      </div>
    </div>
    {user.token && 
      <div className="nav-bottom">
        <Link to="/"><h5>Home</h5></Link>
        <Link to="/"><h5>Calandar</h5></Link>
        <Link to="/"><h5>Profile</h5></Link>
        <Link to="/"><h5>Settings</h5></Link>
      </div>
    }
  </nav>

export default withRouter(Nav)