import React, { useContext, useState } from 'react'
import { Context } from '../App'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { updateForm, formValid } from '../shared/formValidation'
import { createUser } from '../shared/userRequests'

const Splash = () => {
  const { user, setUser, setLoading } = useContext(Context)
  const [ formError, setFormError ] = useState("")
  const [ form, setForm ] = useState({
    name: "",
    email: "",
    password: "",
    passConfirm: "",
  })

  const onSubmitHandler = e => {
    e.preventDefault()
    createUser(form, user, setUser, setLoading)
  }

  return (
    <div className="model-wrapper">
      <form className="model" onSubmit={e => onSubmitHandler(e)}>
        <div className="top">
          <h3>Create An Account</h3>
        </div>
        <div className="middle">
          <TextField 
            required
            error={formError.includes("name")}
            label="Name"
            name="name"
            style={{ width: "100%", marginBottom: 20 }} 
            onChange={e => updateForm(e, form, setForm, setFormError)}
          />
          <TextField 
            required
            error={formError.includes("email")}
            label="Email"
            name="email"
            style={{ width: "100%", marginBottom: 20 }} 
            onChange={e => updateForm(e, form, setForm, setFormError)}
          />
          <TextField 
            required
            error={formError.includes("Your password")}
            label="Password" 
            name="password"
            type="password" 
            style={{ width: "100%", marginBottom: 20 }} 
            onChange={e => updateForm(e, form, setForm, setFormError)}
          />
          <TextField 
            required
            error={formError.includes("do not match")}
            label="Password Check" 
            name="passConfirm"
            type="password"
            style={{ width: "100%" }} 
            onChange={e => updateForm(e, form, setForm, setFormError)}
          />
        </div>
        <div className="bottom">
          <Button type="submit" disabled={!formValid(form, formError)} className="form-btn">
            Sign Up
          </Button>
        </div>
      </form>
      <h6 className="model-outside-txt" style={{ marginTop: 10 }}>By creating in account you agree to the 
        <Link to="terms-and-conditions"><strong>terms and conditions</strong></Link>
      </h6>
    </div>
  )
}

export default Splash