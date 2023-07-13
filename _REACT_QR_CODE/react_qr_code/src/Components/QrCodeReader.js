import React, { useRef, useState } from 'react';
import QrScanner from 'qr-scanner';

const QrCodeReader = () => {
    const [data, setData] = useState('No result');
    const [file, setFile] = useState(null)
    const filereader = FileReader()
    const ref = useRef()
    const handleClick = (e) => {
        ref.current.click()
    }
    const handleChange = async (e) => {

        setData(e.target.files[0])
        const res = await QrScanner.scanImage(data)
        setFile(res)
        console.log('file', res)
    }
    console.log('file', data)
    return <>
        <div className="container">
            <input className='d-none' type="file" onChange={(e) => handleChange(e)} ref={ref} />
            <button onClick={(e) => handleClick(e)}> Scane</button>
            {file}
        </div>

    </>

};
export default QrCodeReader;