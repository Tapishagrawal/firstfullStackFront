import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Signup } from './Signup'
import { Login } from './Login'
import CreateNotes from './CreateNotes'
import { Notes } from './Notes'
import { EditNote } from './EditNote'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create" element={<CreateNotes />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/notes/edit/:noteId" element={<EditNote />} />
        </Routes>
    )
}
