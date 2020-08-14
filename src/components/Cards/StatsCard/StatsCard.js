import React from 'react'
import './_StatsCard.scss'

const StatsCard = ({ stats, style }) => 
  <div className="stats-card" style={style}>
    {Object.values(stats).map((stat, i) => (
      <div key={i} className="stat">
        <h6>{stat.name}</h6>
        <h5>{`${stat.value}${stat.unit ? stat.unit : ``}`}</h5>
      </div>
    ))}
  </div>

export default StatsCard