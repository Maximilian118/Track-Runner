import React, { useContext, useState } from 'react'
import { Context } from '../App'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { updateForm, errorCheck, formValid } from '../shared/formValidation'
import { login } from '../shared/userRequests'
import Spinner from '../components/Spinner'

const Login = ({ history }) => {
  const { user, setUser } = useContext(Context)
  const [ localLoading, setLocalLoading ] = useState(false)
  const [ backendError, setBackendError ] = useState({
    type: "",
    message: "",
  })
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
    login(form, user, setUser, setLocalLoading, setBackendError, history)
  }

  return (
    <>
      {localLoading && <Spinner/>}
      <div className={`model-wrapper ${localLoading && "model-hide"}`}>
        <form className="model" onSubmit={e => onSubmitHandler(e)}>
          <div className="top">
            <h3>Login</h3>
          </div>
          <div className="middle">
            <div className="middle-row">
              <TextField 
                required
                error={!!errorCheck(formError, backendError, "email")}
                label="Email"
                name="email"
                style={{ width: "100%" }} 
                onChange={e => updateForm(e, form, setForm, formError, setFormError)}
              />
              {errorCheck(formError, backendError, "email")}
            </div>
            <div className="middle-row">
              <TextField 
                required
                error={!!errorCheck(formError, backendError, "password")}
                label="Password" 
                name="password"
                type="password" 
                style={{ width: "100%" }} 
                onChange={e => updateForm(e, form, setForm, formError, setFormError)}
              />
              {errorCheck(formError, backendError, "password")}
            </div>
          </div>
          <div className="bottom">
            <Button type="submit" className="form-btn" disabled={!formValid(form, formError)}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login