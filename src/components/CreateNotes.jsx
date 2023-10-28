import React, { useState } from 'react'
const initState = {
    title:"",
    body:"",
}
const CreateNotes = () => {
    const [notesData, setNotesData] = useState(initState);
    const [isLoding, setIsLoding] = useState(false);
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setNotesData(prev=>({
            ...prev, [name]:value
        }))
    } 
    const handleSubmit = async () =>{
        try {
            setIsLoding(true);
            let res = await fetch("https://kind-pink-elk-sari.cyclic.app/notes/create",{
                method:"POST",
                headers:{
                    "Content-type": "application/json",
                    "authorization":`Bearer ${localStorage.getItem("token")}`
                },
                body:JSON.stringify(notesData)
            })
            const data = await res.json();
            console.log(data)
            setIsLoding(false);
        } catch (error) {
            console.log(error);
            setIsLoding(false);
        }
    }
    return (
        <div>
            <h1>Create Notes</h1>
            <br />
            <input type="text" name='title' placeholder='Enter Title' value={notesData.title} onChange={handleChange} /><br/>
            <input type="text" name='body' placeholder='Enter Description' value={notesData.body} onChange={handleChange} /><br/>
            <button onClick={handleSubmit}>{isLoding?"Loading":"Create Note"}</button>
        </div>
    )
}
/**title:String,
    body:String, */
export default CreateNotes
