import React, { useContext, useState } from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Textarea,
    Typography,
} from "@material-tailwind/react";
import { JournalContext } from '../context/JournalContext';

const EntryModal = () => {
    // Context
    const { addEntry } = useContext(JournalContext)

    // States
    const [open, setOpen] = useState(false);
    const [entryText, setEntryText] = useState("")

    const handleOpen = () => setOpen(!open);
    const handleChange = (e) => setEntryText(e.target.value);

    return (
        <>
            <Button className='border p-2' onClick={handleOpen}>Add new entry</Button>
            <Dialog open={open} size="xs" handler={handleOpen}>
                <div className="flex items-center justify-between">
                    <DialogHeader className="flex flex-col items-start">
                        {" "}

                    </DialogHeader>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-3 h-5 w-5"
                        onClick={handleOpen}
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <DialogBody className='static'>
                    <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
                        Write the message and then click button.
                    </Typography>
                    <div className="grid gap-6">
                        <Textarea label="Message" value={entryText} onChange={handleChange}/>
                    </div>
                </DialogBody>
                <DialogFooter className="space-x-2">
                    <Button className='rounded-sm border pt-1 pb-1 ps-2.5 pe-2.5' variant="text" color="gray" onClick={handleOpen}>
                        cancel
                    </Button>
                    <Button variant="gradient" color="gray" onClick={() => {handleOpen, addEntry()}}>
                        Add new entry
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}

export default EntryModal
