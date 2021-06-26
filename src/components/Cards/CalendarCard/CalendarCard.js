import React from 'react'
import './_CalendarCard.scss'
import { formatDate } from '../../../shared/utility'

const CalendarCard = ({ data }) => 
  <div className="cal-card">
    <div className="top">
      <h6>{`${formatDate(data.date)} ${data.location ? `- ${data.location}` : ``}`}</h6>
    </div>
    {data.logo && <div className="img-wrapper">
      <img alt="logo" src={data.logo}/>
    </div>}
  </div>

export default CalendarCard