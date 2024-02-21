import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export const NP_Login = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <button className='btn btn-warning btn-sm m-2'> <Link to="/downloadfile"> Download Files</Link></button>
                    <button className='btn btn-warning btn-sm m-2'> <Link to="/dataGrid"> Data Grid</Link></button>
                    <button className='btn btn-warning btn-sm m-2'> <Link to="/examples"> Examples</Link></button>
                    <button className='btn btn-warning btn-sm m-2'> <Link to="/exelreader"> Excel Reader</Link></button>
                    <button className='btn btn-warning btn-sm m-2'> <Link to="/charts"> CHarts</Link></button>
                    <button className='btn btn-warning btn-sm m-2'> <Link to="/voicerecorder"> voicerecorder</Link></button>

                </div>

                <div className="col-md-12"><Outlet></Outlet></div>
            </div>
        </div>
    )
}
