import React from 'react'
import './_StatsCard.scss'

const StatsCard = ({ stats, style }) => 
  <div className="stats-card" style={style}>
    {Object.entries(stats).map((obj, i) => (
      <div key={i} className="stat">
        <h6>{obj[0]}</h6>
        <h5>{obj[1]}</h5>
      </div>
    ))}
  </div>

export default StatsCard