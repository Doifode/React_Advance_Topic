import React, { useState } from 'react';
// import './PdfViewer.css';

const PdfViewer = () => {
    const [file, setFile] = useState(null);
    const handleChange = (e) => {
       
            setFile(URL.createObjectURL(e.target.files[0]));
        
    }

    console.log(file)
    return (
        <div className="pdf-viewer">
            <input type="file" accept=".pdf" onChange={(e) => handleChange(e)} />
            <button  >
                Display PDF
            </button>
            <div className="pdf-container">
                <a href={file} > <button> click</button></a>
            </div>

        </div>
    );
};

export default PdfViewer;
