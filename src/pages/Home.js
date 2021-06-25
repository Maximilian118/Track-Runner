import React, { useContext } from 'react'
import { Context } from '../App'
import TrackCard from '../components/Cards/TrackCard'

const Home = () => {
  const { calendar } = useContext(Context)

  return (
    <>
      <TrackCard calendar={calendar}/>
    </>
  )
}

export default Home