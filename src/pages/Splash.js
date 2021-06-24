import React, { useContext, useState } from 'react'
import { Context } from '../App'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { updateForm, errorCheck, formValid } from '../shared/formValidation'
import { createUser } from '../shared/userRequests'
import Spinner from '../components/Spinner';

const Splash = () => {
  const { user, setUser } = useContext(Context)
  const [ localLoading, setLocalLoading ] = useState(false)
  const [ backendError, setBackendError ] = useState({
    type: "",
    message: "",
  })
  const [ form, setForm ] = useState({
    name: "",
    email: "",
    password: "",
    passConfirm: "",
  })
  const [ formError, setFormError ] = useState({
    name: "",
    email: "",
    password: "",
    passConfirm: "",
  })

  const onSubmitHandler = e => {
    e.preventDefault()
    createUser(form, user, setUser, setLocalLoading, setBackendError)
  }

  return (
    <>
      {localLoading && <Spinner/>}
      <div className={`model-wrapper ${localLoading && "model-hide"}`}>
        <form className="model" onSubmit={e => onSubmitHandler(e)}>
          <div className="top">
            <h3>Create An Account</h3>
          </div>
          <div className="middle">
            <div className="middle-row">
              <TextField 
                required
                error={!!errorCheck(formError, backendError, "name")}
                label="Name"
                name="name"
                style={{ width: "100%" }} 
                onChange={e => updateForm(e, form, setForm, formError, setFormError)}
              />
              {errorCheck(formError, backendError, "name")}
            </div>
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
            <div className="middle-row">
              <TextField 
                required
                error={!!errorCheck(formError, backendError, "passConfirm")}
                label="Password Check" 
                name="passConfirm"
                type="password"
                style={{ width: "100%" }} 
                onChange={e => updateForm(e, form, setForm, formError, setFormError)}
              />
              {errorCheck(formError, backendError, "passConfirm")}
            </div>
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
    </>
  )
}

export default Splash