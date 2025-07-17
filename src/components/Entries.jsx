import React, { useContext } from 'react'
import { JournalContext } from '../context/JournalContext'
import { CalendarContext } from '../context/CalendarContext'

const Entries = () => {
  const {selectedDay, setSelectedDay} = useContext(CalendarContext)
  const {journalEntries, setJournalEntries, entriesDate, setEntriesDate} = useContext(JournalContext)

  return (
    <section>
      {journalEntries[entriesDate] && journalEntries[entriesDate].registers.map(register => (
        
        <div key={register.id} className='flex gap-4'>
          <p>{register.time}</p>
          <p>{register.text}</p>
        </div>
      ))}
    </section>
  )
}

export default Entries
