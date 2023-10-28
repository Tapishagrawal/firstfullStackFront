import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div style={{display:'flex', justifyContent:"center", gap:"10px"}}>
            <Link to={"/notes"}>Home</Link>
            <Link to={"/register"}>Registration</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/create"}>Add Note</Link>
        </div>
    )
}
