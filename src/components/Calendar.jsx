import { format } from "date-fns"
import { useContext } from "react"
import { CalendarContext } from "../context/CalendarContext"

const Calendar = ({ }) => {
    // States
    const { today, days,
        selectedDay, setSelectedDay,
        weekDays, months,
        getToday,
        getMonthView } = useContext(CalendarContext)


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
            {/* Month Days */}
            <div className="grid grid-cols-7 gap-2">
                {days.map((day, i) => {
                    if (!day) {
                        return <div key={`empty-${i}`} />; 
                    }

                    const dataDate = format(day, "dd-MM-yyyy");
                    return (
                        <button
                            key={dataDate}
                            data-date={dataDate}
                            // onClick={() => openRegister(dataDate)}
                            className="no-border bg-white text-gray-800 p-2 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {format(day, "d")}
                        </button>
                    );
                })}
            </div>
        </section>
    )
}

export default Calendar
