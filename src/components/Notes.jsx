import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"

export const Notes = () => {
    const [notes, setNotes] = useState([]);

    const fectNotesData = async () => {
        try {
            let res = await fetch("https://kind-pink-elk-sari.cyclic.app/notes",{
                method:"GET",
                headers:{
                    "authorization" : `Bearer ${localStorage.getItem("token")}`
                }
            })
            const data = await res.json();
            setNotes(data);
        } catch (error) {
            console.log(error)
        }
    }
    const handleDeteNote = async(noteId) =>{
        try {
            const res = await fetch(`https://kind-pink-elk-sari.cyclic.app/notes/delete/${noteId}`,{
                method:"DELETE",
                headers:{
                    "authorization":`Bearer ${localStorage.getItem("token")}`
                }
            })
            const data = await res.json();
            let updatedNotes = notes.filter(note =>note._id!==noteId);
            setNotes(updatedNotes)
            console.log(data); 
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fectNotesData();
    },[])
    return (
        <div>
            <h1>All Notes</h1>
            {
                notes?.map((note)=>(
                    <div key={note._id}>
                        <h1>{note.title}</h1>
                        <p>{note.body}</p>
                        <div>
                            <Link to={`/notes/edit/${note._id}`}>Edit</Link>
                            <button onClick={()=>handleDeteNote(note._id)}>Delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
