import React, { useContext } from 'react'
import { Context } from '../App'
import { Link } from 'react-router-dom'
import CalendarBar from '../components/CalendarBar'
import TrackCard from '../components/Cards/TrackCard'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

const Splash = () => {
  const { user } = useContext(Context)

  return (
    <>
      <CalendarBar calendar={user.calendar}/>
      <div className="flex-row" style={{ marginTop: 130, justifyContent: "center" }}>
        <TrackCard calendar={user.calendar} style={{ marginRight: 20 }}/>
        <form className="model" style={{ maxWidth: 350 }}>
          <div className="top">
            <h3>Create An Account</h3>
          </div>
          <div className="bottom">
            <TextField required id="standard-basic" label="Name" style={{ width: "100%" }}/>
            <TextField required id="standard-basic" label="Email" style={{ width: "100%" }}/>
            <TextField required id="standard-basic" label="Password" type="password" style={{ width: "100%" }}/>
            <TextField required id="standard-basic" label="Password Confirm" type="password" style={{ width: "100%" }}/>
            <div className="terms-and-conditions-wrapper" style={{ marginLeft: 10 }}>
              <Link to="/termsandconditions" style={{ marginRight: 10 }}><h6 className="terms-and-conditions">I agree to the <u><strong>Terms and Conditions</strong></u></h6></Link>
              <Checkbox color="default" inputProps={{ 'aria-label': 'secondary checkbox' }}/>
            </div>
            <Button disabled style={{ width: 100 }}>Sign Up</Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Splash