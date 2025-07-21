import React from 'react'
import Entries from '../components/Entries'
import EntryModal from '../components/EntryModal'

const JournalPage = () => {
  return (
    <div>
      <EntryModal/>
      <Entries/>
    </div>
  )
}

export default JournalPage
