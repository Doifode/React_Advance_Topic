import React, { useState } from 'react'

export const DownloadAnyFile = () => {
    const [link, setLink] = useState()
    return (
        <div className="container">
            <div className="row d-flex justify-content-center  align-items-center">
                <div className="w-50">
                    <div>
                        <input type="text" onChange={(e) => setLink(e.target.value)} className='form-control' />
                    </div>
                    <a href={link} download=".yash"><button className='btn btn-success btn-sm' disabled={link ? false : true} >
                        Download </button></a>
                </div>
            </div>
        </div>
    )
}
