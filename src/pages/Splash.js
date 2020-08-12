import React, { useContext } from 'react'
import { Context } from '../App'
import CalendarBar from '../components/CalendarBar'
import TrackCard from '../components/Cards/TrackCard'

const Splash = () => {
  const { user } = useContext(Context)

  return (
    <>
      <CalendarBar calendar={user.calendar}/>
      <div className="flex-row" style={{ marginTop: 130 }}>
        <TrackCard calendar={user.calendar}/>
      </div>
    </>
  )
}

export default Splash