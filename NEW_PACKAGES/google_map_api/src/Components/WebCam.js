/**
 * The function returns a React component that displays a webcam feed and allows the user to capture a
 * photo.
 * 
 * @return A component that displays a button to open/close the camera and a webcam component that
 * allows the user to take a photo. The captured photo is displayed as an image below the button.
 */
import React, { useState } from 'react'
import Webcam from 'react-webcam'

export const WebCam = () => {
    const [imagePath, setImagePath] = useState();
    const [openCamera, setOpenCamera] = useState(false)
    return (
        <div className='centerItem h-100 w-100'>
            {
                openCamera ? <Webcam >
                    {({ getScreenshot }) => (

                        <button className='btn btn-primary' onClick={() => setImagePath(getScreenshot())}> Capture Photo</button>
                    )}
                </Webcam> : ''
            }
            <button className='btn btn-lg btn-primary' onClick={() => setOpenCamera(!openCamera)}>{!openCamera ? "Open Camera" : "Close Camera"} </button>
            <img src={imagePath} alt="" />
        </div>
    )
}
