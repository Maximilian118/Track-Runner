import React from 'react'
import './_TrackCard.scss'

const TrackCard = ({ calendar }) => {
  const today = calendar[18]

  return (
    <div className="card-model">
      <div className="top">
        <h5>{`${today.confirmed ? "Current" : "Next"} Track - ${today.location}`}</h5>
      </div>
      <img alt="Track Logo" src={today.logo}></img>
    </div>
  )
}


export default TrackCard