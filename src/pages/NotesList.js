import React, {useState, useEffect} from 'react'

const NotesList = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [third]);

    const getNotes = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/notes/');
        const data = response.json();
        setNotes(data);
    }
    
  return (
    <div>
        nots
    </div>
  )
}

export default NotesList