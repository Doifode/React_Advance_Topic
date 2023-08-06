import React, { useState } from 'react';

export const NP_DownloadFiles = () => {
    const [url, setUrl] = useState()
    const DownloadFiles = (url) => {
        const suffix = url.split('/').pop()
        const downloadFile = document.createElement("a");
        downloadFile.href = url
        downloadFile.setAttribute('download', suffix);
        document.body.appendChild(downloadFile);
        downloadFile.click()
        downloadFile.remove()
    }
    return (
        <>

            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <input type="text" className='form-control border rounded-0 w-50' onChange={(e) => setUrl(e.target.value)} />
                    <button className='btn btn-success' onClick={() => DownloadFiles(url)}>Download</button>
                </div>
            </div>

        </>
    )
}
