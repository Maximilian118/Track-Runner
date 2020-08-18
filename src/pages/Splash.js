import React, { useContext, useState } from 'react'
import { Context } from '../App'
import { Link } from 'react-router-dom'
import CalendarBar from '../components/CalendarBar'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { updateForm } from '../shared/formValidation'

const Splash = () => {
  const { user } = useContext(Context)
  const [ formError, setFormError ] = useState("")
  const [ form, setForm ] = useState({
    name: "",
    email: "",
    password: "",
    passConfirm: "",
  })

  return (
    <>
      <CalendarBar calendar={user.calendar}/>
      <form className="model center">
        <div className="top">
          <h3>Create An Account</h3>
        </div>
        <div className="bottom">
          <TextField 
            required 
            label="Name"
            name="name"
            style={{ width: "100%", marginBottom: 20 }} 
            onChange={e => updateForm(e, form, setForm, setFormError)}
          />
          <TextField 
            required 
            label="Email"
            name="email"
            style={{ width: "100%", marginBottom: 20 }} 
            onChange={e => updateForm(e, form, setForm, setFormError)}
          />
          <TextField 
            required 
            label="Password" 
            name="password"
            type="password" 
            style={{ width: "100%", marginBottom: 20 }} 
            onChange={e => updateForm(e, form, setForm, setFormError)}
          />
          <TextField 
            required 
            label="Password Confirm" 
            name="passConfirm"
            type="password"
            style={{ width: "100%", marginBottom: 20 }} 
            onChange={e => updateForm(e, form, setForm, setFormError)}
          />
          {formError ? <p className="formError">{formError}</p> :
            <>
              <div className="terms-and-conditions-wrapper">
                <Link to="/termsandconditions">
                  <h6 className="terms-and-conditions">I agree to the <u><strong>Terms and Conditions</strong></u></h6>
                </Link>
                <Checkbox color="default"/>
              </div>
              <Button disabled style={{ width: 100 }}>Sign Up</Button>
            </>
          }
        </div>
      </form>
    </>
  )
}

export default Splash