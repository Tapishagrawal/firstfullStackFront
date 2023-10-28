import React from 'react'
import { Route, Routes } from 'react-router-dom'

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
