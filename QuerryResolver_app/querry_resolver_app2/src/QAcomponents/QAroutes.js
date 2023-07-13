import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { QAhome } from './QAhome'
import { QAdashboard } from './QAdashboard'
export const QAroutes = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<QAhome />} />
                <Route path='/dashboard' element={<QAdashboard />} />
            </Routes>
        </BrowserRouter>
    )
}
