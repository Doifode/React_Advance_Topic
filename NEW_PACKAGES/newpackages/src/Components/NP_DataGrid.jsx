import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid';

export const NP_DataGrid = () => {
    const [gridData, setGridData] = useState([]);

    const getData = async () => {
        const data = await axios.get('https://www.balldontlie.io/api/v1/players');
        setGridData(data.data.data);
    }
    useEffect(() => { getData() }, [])
    const Columns = [
        { field: "id", headerName: "id", width: 150 },
        { field: "abbreviation", headerName: "abbreviation", width: 150 },
        { field: "city", headerName: "city", width: 150 },
        { field: "conference", headerName: "conference", width: 150 },
        { field: "division", headerName: "division", width: 150 }
    ]
    console.log('gridData', gridData);
    const rows = gridData.map((rows) => {
        return {
            id: rows.id,
            abbreviation: rows.team.abbreviation,
            city: rows.team.city,
            conference: rows.team.conference,
            division: rows.team.division
        }
    })
    return (


        <div className='d-flex justify-content-center align-items-center'>
            <DataGrid rows={rows} pageSizeOptions={10} rowSelection={10} columns={Columns} style={{ height: 500, width: 500 }} /></div>


    )
}
