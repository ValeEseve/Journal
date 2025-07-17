import { format } from "date-fns"
import { createContext, useContext, useEffect, useState } from "react";
import { CalendarContext } from "./CalendarContext";


export const JournalContext = createContext();

const JournalContextProvider = ({ children }) => {
    const { selectedDay, setSelectedDay } = useContext(CalendarContext)
    const [journalEntries, setJournalEntries] = useState({
        "16-07-2025": { registers: 
            [{text: "Primer registro del Journal!", 
            time: "17:43" ,
            id: 100}, 
            {text: "Esto va a quedar bueno 💻", 
            time: "17:46" ,
            id: 101}], 
            emotions: [] },
            "15-07-2025": { registers: 
            [{text: "Registro anterior de prueba", 
            time: "17:43" ,
            id: 177}, 
            {text: "A seguir programando!", 
            time: "17:46" ,
            id: 199}], 
            emotions: [] }
    });
    const [entriesSelectedDay, setEntriesSelectedDay] = useState({})
    const [entriesDate, setEntriesDate] = useState(format(new Date(selectedDay.year, selectedDay.month, selectedDay.day), "dd-MM-yyyy"))

    // Context

    useEffect(() => {
        setEntriesDate(format(new Date(selectedDay.year, selectedDay.month, selectedDay.day), "dd-MM-yyyy"))
        console.log(journalEntries[entriesDate])
        setEntriesSelectedDay(journalEntries[entriesDate])
        console.log(entriesSelectedDay)
}, [selectedDay])

    return (
        <JournalContext.Provider value={{
            journalEntries, setJournalEntries,
            entriesDate, setEntriesDate
        }}>
            {children}
        </JournalContext.Provider>
    )
}

export default JournalContextProvider