import * as XLSX from "xlsx"
import React, { useRef, useState } from 'react'

const NP_Xlreader = (e) => {
    const [xlData, setXlData] = useState()
    const inputRef = useRef();
    const handleXl = (e) => {
        const fileReader = new FileReader();
        fileReader.readAsBinaryString(e.target.files[0]);
        fileReader.onload = (e) => {
            const data = e.target.result;
            const workBook = XLSX.read(data, { type: "binary" });
            const sheetName = workBook.SheetNames[0];
            const sheet = workBook.Sheets[sheetName];
            const parsedata = XLSX.utils.sheet_to_json(sheet)
            setXlData(parsedata)

        }

    }
    console.log("xlData", xlData)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <input type="file" onChange={(e) => handleXl(e)} className="d-none" ref={inputRef} />
                    <button onClick={() => { inputRef.current.click() }}> Choose XL</button>
                </div>
            </div>

            {
                xlData && <table>
                    <thead>
                        <tr>
                            {Object.keys(xlData[0]).map((k) => <th>{k}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {xlData.map((rows, data) => {
                            return <tr key={data}>
                                {Object.values(rows).map((values, index) =>
                                    <td key={index}>{values}</td>
                                )}
                            </tr>
                        })}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default NP_Xlreader