import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate()

    useEffect(() => {

        localStorage.openpages = Date.now();
        window.addEventListener("storage", function (e) {
            if (e.key == "openpages") {
                localStorage.page_available = Date.now()
                console.log(e.key, 'keys')

            } if (e.key == "page_available") {
                navigate('/webcam');


            }
        }, false)
    }, [])
    return (
        <div className="row">
            <div className="col-md-12">
                <ul className='d-flex '>

                    <Link className='px-3' to="/downloadAnyFile" > downloadAnyFile</Link>
                    <Link className='px-3' to="/textReader" > textReader</Link>
                    <Link className='px-3' to="/webcam" > webcam</Link>
                    <Link className='px-3' to="/TimeZone" > TimeZone</Link>
                    <Link className='px-3' to="/PdfViewer" > PDFViewer</Link>
                    <Link className='px-3' to="/voiceListener" > voiceListener</Link>
                    <Link className='px-3' to="/TextEditor" > TextEditor</Link>

                </ul>

            </div>
            <Outlet />
        </div>

    )
}
