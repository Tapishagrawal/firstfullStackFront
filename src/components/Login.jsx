import React, { useState } from 'react'
const initState = {
    email:"",
    pass:"",
}
export const Login = () => {
    const [userData, setUserData] = useState(initState);
    const [isLoding, setIsLoding] = useState(false);
    const [isLogin, setIsLogin] = useState("");

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setUserData(prev=>({
            ...prev, [name]:value
        }))
    }  
    const handleSubmit = async() =>{
        try {
            setIsLoding(true);
            let res = await fetch("https://kind-pink-elk-sari.cyclic.app/users/login",{
                method:"POST",
                headers:{
                    "Content-type": "application/json"
                },
                body:JSON.stringify(userData) 
            })
            const data = await res.json();
            console.log(data);
            setIsLogin(data.msg)
            localStorage.setItem("token", data.token);
            setIsLoding(false);
        } catch (error) {
            console.log(error)
            setIsLoding(false);
        }
    }
    console.log(isLogin)
    return (
        <div>
            <h1>Login</h1>
            <p>{isLogin&& isLogin}</p>
            <input type="text" placeholder='Enter Your Email' name="email" value={userData.email} onChange={handleChange}/><br/>
            <input type="text" placeholder='Enter Your Password' name="pass" value={userData.pass} onChange={handleChange}/><br/>
            <button onClick={handleSubmit}>{isLoding ? "Loding...":"Login"}</button>
        </div>
    )
}
