import React from 'react'
import './_CalendarBar.scss'
import CalendarItem from '../Cards/CalendarItem'
import moment from 'moment'

const CalendarBar = ({ calendar }) => {
  const noPast = []

  calendar.forEach(item => {
    if (moment(item.date).isAfter(moment().subtract(1, "d").format())) {
      noPast.push(item)
    }
  })
  
  return (
    <div className="cal-bar">
      {noPast.map((data, i) => <CalendarItem key={i} data={data}/>)}
    </div>
  )
}

export default CalendarBar