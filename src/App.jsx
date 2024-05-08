import { BrowserRouter, Route, Routes } from "react-router-dom"
import Notes from "./pages/Notes"
import CreateNote from "./pages/CreateNote"
import EditNote from "./pages/EditNote";
import dummyNotes from "./dummy_notes"

import { useState } from 'react'

const App = () => {

    const [notes, setNotes] = useState(dummyNotes);

    const handleAddNote = () => {
        const newNote = { id: Date.now(), title: 'New Note', details: 'This is a new note' };
        setNotes([...notes, newNote]); // Update the notes state by adding a new note
      };

    return (
        <main id="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Notes notes={notes} />} />
                    <Route path="/create-note" element={<CreateNote handleAddNote={handleAddNote} />} />
                    <Route path="/edit-note/:id" element={<EditNote />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default App