import React, { useContext } from 'react'
import { Context } from '../App'
import CalendarBar from '../components/CalendarBar'

const Splash = () => {
  const { user } = useContext(Context)

  return (
    <>
      <CalendarBar calendar={user.calendar}/>
    </>
  )
}

export default Splash