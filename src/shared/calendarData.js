import moment from 'moment'
import { F1 } from './seasonData'

// Return calendar array with default location and img data.
export const sortCalArr = () => {
  const lsCal = JSON.parse(localStorage.getItem('cal'))
  
  if (lsCal && moment(lsCal[18]).isSame(moment().format(), "day")) {
    return lsCal
  } else {
    const calArr = []

    const startDate = moment().subtract(18, "d").format()

    for (let i = 0; i < 365; i++) {
      const date = moment(startDate).add(i, "d").format()
      let roundData = {}

      F1.F1_2021.forEach(round => {
        if (moment(date).isAfter(round.from) && moment(date).isBefore(round.to)) {
          roundData = {
            confirmed: true,
            ...round,
          }
        } 
      })

      calArr.push({
        date: date,
        events: [],
        ...roundData,
      })
    }

    localStorage.setItem('cal', JSON.stringify(calArr))
    return calArr
  }
}