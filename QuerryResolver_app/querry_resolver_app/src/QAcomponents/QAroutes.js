import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { QAhome } from './QAhome'
export const QAroutes = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<QAhome />} />
            </Routes>
        </BrowserRouter>
    )
}
