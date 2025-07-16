import {
    getDaysInMonth,
    startOfMonth,
    getDay,
    getMonth,
    getDate,
    format,
    getYear
} from "date-fns";
import Calendar from "../components/Calendar";

const CalendarPage = () => {
    

    return (
        <section>
            <Calendar />
        </section>
    )
}

export default CalendarPage
