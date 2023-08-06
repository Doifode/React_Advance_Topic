import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NP_Login } from './NP_Login'
import { NP_Charts } from './NP_Charts'
import { NP_DownloadFiles } from './NP_DownloadFiles'
import { NP_DataGrid } from './NP_DataGrid'
import { NP_Email } from './NP_Email'
import Examples from './Examples'
import { DragnDrop } from './DragnDrop'
const NP_Routs = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<NP_Login />}>
                        <Route path='/charts' element={<NP_Charts />} />
                        <Route path='/downloadfile' element={<NP_DownloadFiles />} />
                        <Route path='/dataGrid' element={<NP_DataGrid />} />
                        <Route path='/email' element={<NP_Email />} />
                        <Route path='/examples' element={<Examples />} />
                        <Route path='/drag' element={<DragnDrop />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default NP_Routs