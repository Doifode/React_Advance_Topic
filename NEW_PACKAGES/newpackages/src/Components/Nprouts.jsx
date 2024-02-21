import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NP_Login } from './NP_Login'
import { NP_DownloadFiles } from './NP_DownloadFiles'
import { NP_DataGrid } from './NP_DataGrid'
import Examples from './Examples'
import NP_Xlreader from './NP_Xlreader'
import NP_Charts from './NP_Charts'
import NP_VoiceRecorder from "./NP_VoiceRecorder"

const NP_Routs = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<NP_Login />}>
                        <Route path='/downloadfile' element={<NP_DownloadFiles />} />
                        <Route path='/dataGrid' element={<NP_DataGrid />} />
                        <Route path='/examples' element={<Examples />} />
                        <Route path='/exelreader' element={<NP_Xlreader />} />
                        <Route path='/charts' element={<NP_Charts />} />
                        <Route path='/voicerecorder' element={<NP_VoiceRecorder />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default NP_Routs