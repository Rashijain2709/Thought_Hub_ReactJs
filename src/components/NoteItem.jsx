import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({ note }) => {
    return (
        <Link className='note' to={`/edit-note/${note.id}`}>
            <h4>{note.title.length > 50 ? note.title.substr(0, 50) + "..." : note.title}</h4>
            <p>{note.lastUpdate}</p>
        </Link>

  )
}

export default NoteItem