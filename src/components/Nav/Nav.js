import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => 
  <nav>
    <div className="nav-bar">
      <Link to="/"><h1>Track-Runner</h1></Link>
      <div className="nav-right">
        <Link to="/login"><h5>Login</h5></Link>
      </div>
    </div>
  </nav>

export default Nav