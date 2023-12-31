import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from '../pages/home'
import NotFound from '../pages/NotFount'



export default function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
