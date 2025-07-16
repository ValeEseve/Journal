import { getMonth, getDay, getDaysInMonth } from "date-fns";
import { createContext, useEffect, useState } from "react";


export const CalendarContext = createContext()

const CalendarProvider = ({ children }) => {
    // Functions
    function getToday(day = new Date()) {
        return day
    }
    const getMonthView = (date) => {
        const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        const firstDayOfWeek = getDay(firstDayOfMonth);
        const blankSpaces = Array.from({ length: firstDayOfWeek }).map(() => null);
        const daysInMonth = getDaysInMonth(firstDayOfMonth);

        const days = Array.from({ length: daysInMonth }, (_, i) => {
            return new Date(date.getFullYear(), date.getMonth(), i + 1);
        });
        return [...blankSpaces, ...days];
    };

    // States
    const today = getToday()
    const [selectedDay, setSelectedDay] = useState({
        month: today.getMonth(),
        year: today.getFullYear()
    })
    const weekDays = [
        "Lun", "Mar", "Mie", "Jue", "Vie", "Sáb", "Dom"
    ]
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]



    const days = getMonthView(new Date(selectedDay.year, selectedDay.month, 1));

    return (
        <CalendarContext.Provider value={{
            today, days,
            selectedDay, setSelectedDay,
            weekDays, months,
            getToday,
            getMonthView
        }}>
            {children}
        </CalendarContext.Provider>
    )
}

export default CalendarProvider