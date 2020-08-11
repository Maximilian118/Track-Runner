import React from 'react'
import './_CalendarBar.scss'
import CalendarCard from '../Cards/CalendarCard'

const CalendarBar = ({ calendar }) => 
  <div className="cal-bar">
    {calendar.map((date, i) => <CalendarCard key={i} date={date} style={{ width: 100 }}/>)}
  </div>

export default CalendarBar