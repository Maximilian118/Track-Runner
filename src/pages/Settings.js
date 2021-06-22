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
    <>
      <Button onClick={() => logoutHandler()}>Logout</Button>
      <Button onClick={() => deleteUser(user, setUser, setLoading, history)}>Delete Account</Button>
    </>
  )
}

export default Settings