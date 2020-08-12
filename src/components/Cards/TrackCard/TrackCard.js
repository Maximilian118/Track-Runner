import React from 'react'
import './_TrackCard.scss'
import moment from 'moment'
import StatsCard from '../StatsCard'

const TrackCard = ({ calendar, style }) => {
  let track = { sameDay: false, date: moment().format(), location: "", img: "" }
  calendar.forEach(date => {
    if (date.location && !track.location) {
      track = {...date, sameDay: moment(date.date).format("DDD") === moment().format("DDD") ? true : false}
    }
  })
  
  return (
    <div className="track-card" style={style}>
      <div className="top">
        <h3>{`${track.sameDay ? `Current` : `Next`} Track`}</h3>
      </div>
      <div className="img-wrapper">
        <img alt="The current or next track" src={track.img}/>
      </div>
      {track.stats && <StatsCard stats={track.stats}/>}
    </div>
  )
}

export default TrackCard