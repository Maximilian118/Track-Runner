import React from 'react'
import './_CalendarBar.scss'
import CalendarCard from '../Cards/CalendarCard'

const CalendarBar = ({ calendar }) => 
  <div className="cal-bar">
    {calendar.map((data, i) => <CalendarCard key={i} data={data}/>)}
  </div>

export default CalendarBar