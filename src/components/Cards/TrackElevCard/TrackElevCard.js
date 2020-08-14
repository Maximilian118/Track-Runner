import React from 'react'
import './_TrackElevCard.scss'

const TrackElevCard = ({ track }) => 
  <div className="track-elev-card">
    <div className="title">
      <h5>Track Elevation</h5>
    </div>
    {track.elevation.map((height, i) => {
      const barHeight = height - track.stats.minElev.value
      return <div key={i} className="elev-bar" style={{ height: barHeight * 2 }}/>
    })}
  </div>

export default TrackElevCard