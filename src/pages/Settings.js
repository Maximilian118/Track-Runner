import React, { useContext } from 'react'
import { Context } from '../App'
import Button from '@material-ui/core/Button'
import { logout } from '../shared/localStorage'

const Settings = ({ history }) => {
  const { setUser } = useContext(Context)

  const logoutHandler = () => {
    setUser(logout())
    history.push("/login")
  }

  return (
    <>
      <Button onClick={() => logoutHandler()}>Logout</Button>
      <Button>Delete Account</Button>
    </>
  )
}

export default Settings