import React, { useState } from 'react'
import { updateForm, errorCheck, formValid } from '../shared/formValidation'
import { forgot } from '../shared/userRequests'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Spinner from '../components/Spinner'

const Forgot = ({ history }) => {
  const [ localLoading, setLocalLoading ] = useState(false)
  const [ backendError, setBackendError ] = useState({
    type: "",
    message: "",
  })
  const [ form, setForm ] = useState({
    email: "",
  })
  const [ formError, setFormError ] = useState({
    email: "",
  })

  const onSubmitHandler = e => {
    e.preventDefault()
    forgot(form.email, setLocalLoading, setBackendError, history)
  }
  
  return (
    <>
      {localLoading && <Spinner/>}
      <div className={`model-wrapper ${localLoading && "model-hide"}`}>
        <form className="model" onSubmit={e => onSubmitHandler(e)}>
          <div className="top">
            <h3>Forgot Password</h3>
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
          </div>
          <div className="bottom">
            <Button type="submit" className="form-btn" disabled={!formValid(form, formError)}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Forgot