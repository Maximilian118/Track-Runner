import React, { useContext } from 'react'
import { Context } from '../App'
import TrackCard from '../components/Cards/TrackCard'

const Home = () => {
  const { calendar } = useContext(Context)

  return (
    <>
      <div className="page-left">
        <TrackCard calendar={calendar}/>
      </div>
      <div className="page-right">
        
      </div>
    </>
  )
}

export default Home