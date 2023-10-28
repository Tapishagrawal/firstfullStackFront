import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const EditNote = () => {
    const [notesData, setNotesData] = useState({})
    const [isLoding, setIsLoding] = useState(false);
    const { noteId } = useParams();
    const navigate = useNavigate()
    const handleChange = (e) => {
        const {name,value} = e.target;
        setNotesData(prev=>({
            ...prev, [name]:value
        }))
    }
    const handleSubmit = async() => {
        try {
            setIsLoding(true)
            let res = await fetch(`https://kind-pink-elk-sari.cyclic.app/notes/update/${noteId}`,{
                method:"PATCH",
                headers:{
                    "Content-type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(notesData)
            })
            const data = await res.json();
            navigate("/notes")
            setIsLoding(false);
        } catch (error) {
            console.log(error)
            setIsLoding(false)
        }
    }
    const fetchData = async () => {
        try {
            let res = await fetch(`https://kind-pink-elk-sari.cyclic.app/notes/`,{
                method:"GET",
                headers:{
                    "authorization" : `Bearer ${localStorage.getItem("token")}`
                }
            });
            let data = await res.json();
            const oneData = data.filter(i=>i._id===noteId)
            setNotesData(oneData[0]);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div>
            <h1>EditNote</h1> 
            <input type="text" name='title' placeholder='Enter Title' value={notesData.title} onChange={handleChange} /><br/>
            <input type="text" name='body' placeholder='Enter Description' value={notesData.body} onChange={handleChange} /><br/>
            <button onClick={handleSubmit}>{isLoding?"Loading":"Create Note"}</button>
        </div>
    )
}
