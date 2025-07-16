import { getDaysInMonth, startOfMonth, getDay, format } from "date-fns"
import { useMemo } from "react"

const Calendar = ({}) => {
  

  function getToday() {
        return new Date()
    }

    let today = getToday()
    console.log(today)

 

  return (
    <section>
      {/* Calendar Header */}
      <div>
        <h2>MONTH</h2>
      </div>
      {/* Week days */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map(day => (
          <div key={day} className="flex items-center justify-center">
            {day}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Calendar
