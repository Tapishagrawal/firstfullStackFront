import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/register"}>Registration</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/login"}>Add Note</Link>
        </div>
    )
}
