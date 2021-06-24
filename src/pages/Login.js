import React, { useContext, useState } from 'react'
import { Context } from '../App'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { updateForm, formValid } from '../shared/formValidation'
import { login } from '../shared/userRequests'

const Login = ({ history }) => {
  const { user, setUser, setLoading } = useContext(Context)
  const [ form, setForm ] = useState({
    email: "",
    password: "",
  })
  const [ formError, setFormError ] = useState({
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
          <div className="middle-row">
            <TextField 
              required
              error={!!formError.email && !!formError.email}
              label="Email"
              name="email"
              style={{ width: "100%"}} 
              onChange={e => updateForm(e, form, setForm, formError, setFormError)}
            />
            {formError.email && <h6 className="form-error">{formError.email}</h6>}
          </div>
          <div className="middle-row">
            <TextField 
              required
              error={!!formError.password && !!formError.password}
              label="Password" 
              name="password"
              type="password" 
              style={{ width: "100%" }} 
              onChange={e => updateForm(e, form, setForm, formError, setFormError)}
            />
            {formError.password && <h6 className="form-error">{formError.password}</h6>}
          </div>
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