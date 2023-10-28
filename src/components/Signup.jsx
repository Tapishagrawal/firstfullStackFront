import React, { useState } from 'react'
const initState = {
    username:"",
    email:"",
    pass:""
}
export const Signup = () => {
    const [userData, setUserData] = useState(initState);
    const [isRegister, setIsRegister] = useState("");

    const handleChange = (e) =>{
        const {name,value} = e.target;

        setUserData(prev=>({
            ...prev, [name]:value
        }))
    }
    const handleSubmit = async () => {
        try {
            const res = await fetch("https://kind-pink-elk-sari.cyclic.app/users/register", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(userData)
            });
            const data = await res.json();
            setIsRegister(data.msg)
            console.log(data);
        } catch (error) {
            console.error(error);
        }
        setUserData(initState);
    }
    
    return (
        <>
            <h3>Registration</h3>
            <p>{isRegister && isRegister}</p>
            <input type="text" placeholder='Enter username' name="username" value={userData.username} onChange={handleChange}/>
            <input type="text" placeholder='Enter email' name="email" value={userData.email} onChange={handleChange}/>
            <input type="password" placeholder='Enter password' name="pass" value={userData.pass} onChange={handleChange}/>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
