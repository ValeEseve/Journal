import { getYear, getMonth, getDay, getDate, getFullYear, getDaysInMonth } from "date-fns";
import { createContext, useState } from "react";


export const CalendarContext = createContext()

const CalendarProvider = ({ children }) => {
    // Functions
    function getToday(day = new Date()) {
        return day
    }
    getBlankSpaces = (month, year) => {
        const firstDayOfMonth = new Date(year, month, 1);
        const firstDayOfWeek = getDay(firstDayOfMonth);
        return Array.from({ length: firstDayOfWeek }, (_, i) => (
            <div key={i} className="flex items-center justify-center">
                {/* Blank space */}
            </div>
        ));


    

    // States
    const today = getToday()
    const [selectedDay, setSelectedDay] = useState({
        month: getMonth(today),
        year: getFullYear(today)
    })
    const weekDays = [
    "Lun", "Mar", "Mie", "Jue", "Vie", "Sáb", "Dom"
  ]
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]





    console.log(today)

    return (
        <CalendarContext.Provider value={{
            today,
            selectedDay, setSelectedDay,
            weekDays, months,
        }}>
            {children}
        </CalendarContext.Provider>
    )
}

export default CalendarProvider