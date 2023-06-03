import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from '../Containers/Home/Home.jsx'
export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/books" element={<BookList />} /> */}
        </Routes>
    )
}
