import React, { useContext, useState } from 'react'
import { Context } from '../App'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { updateForm, formValid } from '../shared/formValidation'
import { login } from '../shared/userRequests'

const Login = ({ history }) => {
  const { user, setUser, setLoading } = useContext(Context)
  const [ formError, setFormError ] = useState("")
  const [ form, setForm ] = useState({
    email: "",
    password: "",
  })

  const onSubmitHandler = e => {
    e.preventDefault()
    login(form, user, setUser, setLoading, history)
  }

  return (
    <div className="model-wrapper">
      <form className="model" onSubmit={e => onSubmitHandler(e)}>
        <div className="top">
          <h3>Login</h3>
        </div>
        <div className="middle">
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
            style={{ width: "100%" }} 
            onChange={e => updateForm(e, form, setForm, setFormError)}
          />
        </div>
        <div className="bottom">
          <Button type="submit" className="form-btn" disabled={!formValid(form, formError)}>
            Login
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Login