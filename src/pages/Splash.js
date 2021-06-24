import React, { useContext, useState } from 'react'
import { Context } from '../App'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { updateForm, formValid } from '../shared/formValidation'
import { createUser } from '../shared/userRequests'

const Splash = () => {
  const { user, setUser, setLoading } = useContext(Context)
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
    createUser(form, user, setUser, setLoading)
  }

  return (
    <div className="model-wrapper">
      <form className="model" onSubmit={e => onSubmitHandler(e)}>
        <div className="top">
          <h3>Create An Account</h3>
        </div>
        <div className="middle">
          <div className="middle-row">
            <TextField 
              required
              error={!!formError.name && !!formError.name}
              label="Name"
              name="name"
              style={{ width: "100%" }} 
              onChange={e => updateForm(e, form, setForm, formError, setFormError)}
            />
            {formError.name && <h6 className="form-error">{formError.name}</h6>}
          </div>
          <div className="middle-row">
            <TextField 
              required
              error={!!formError.email && !!formError.email}
              label="Email"
              name="email"
              style={{ width: "100%" }} 
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
          <div className="middle-row">
            <TextField 
              required
              error={!!formError.passConfirm && !!formError.passConfirm}
              label="Password Check" 
              name="passConfirm"
              type="password"
              style={{ width: "100%" }} 
              onChange={e => updateForm(e, form, setForm, formError, setFormError)}
            />
            {formError.passConfirm && <h6 className="form-error">{formError.passConfirm}</h6>}
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
  )
}

export default Splash