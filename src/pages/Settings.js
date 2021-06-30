import React, { useContext } from 'react'
import { Context } from '../App'
import Button from '@material-ui/core/Button'
import { logout } from '../shared/localStorage'
import { deleteUser } from '../shared/userRequests'

const Settings = ({ history }) => {
  const { user, setUser, setLoading } = useContext(Context)

  const logoutHandler = () => {
    setUser(logout())
    history.push("/login")
  }

  return (
    <div className="model-wrapper">
      <div className="model">
        <div className="top">
          <h3>Settings</h3>
        </div>
        <div className="bottom">
          <Button onClick={() => logoutHandler()}>Logout</Button>
          <Button onClick={() => deleteUser(user, setUser, setLoading, history)}>Delete Account</Button>
        </div>
      </div>
    </div>
  )
}

export default Settings