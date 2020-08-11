import React from 'react'
import './_CalendarCard.scss'
import { formatDate } from '../../../shared/utility'

const CalendarCard = ({ date, style }) => 
  <div className="cal-card" style={style}>
    <div className="top">
      <h6>{`${formatDate(date.date)} ${date.location && `- ${date.location}`}`}</h6>
    </div>
    {date.img && <div className="img-wrapper">
      <img alt="date card" src={date.img}/>
    </div>}
  </div>

export default CalendarCard