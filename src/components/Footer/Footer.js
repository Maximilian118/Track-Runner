import React from 'react'
import { Link } from 'react-router-dom'
import { GitHub } from '@material-ui/icons'

const Footer = () => 
  <footer>
    <h5>Maximilian Crosby</h5>
    <Link to={{ pathname: "https://github.com/Maximilian118/Track-Runner-Frontend" }} target="_blank">
      <GitHub/>
    </Link>
  </footer>

export default Footer