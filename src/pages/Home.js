import React, { useContext } from 'react'
import { Context } from '../App'
import TrackCard from '../components/Cards/TrackCard'

const Home = () => {
  const { user } = useContext(Context)

  return (
    <>
      <TrackCard calendar={user.calendar}/>
    </>
  )
}

export default Home