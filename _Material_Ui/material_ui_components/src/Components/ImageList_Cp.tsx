import React, { useEffect, useState } from 'react'
import { ImageList, ImageListItem, ImageListItemBar, Stack } from "@mui/material";
import axios from "axios"
export const ImageList_Cp = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            const datas: any = await axios.get("https://jsonplaceholder.typicode.com/photos")
            if (datas) {
                setData(datas?.data)


            }
        }
        getData()

    }, [])
    console.log('data', data)
    return (

        <Stack spacing={4}>
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {data.map((i: any) => {
                    return <ImageListItem key={i.url}>
                        <img src={i.url} alt="" loading='lazy' />
                        <ImageListItemBar title={i.title} />
                    </ImageListItem>

                })}
            </ImageList>
        </Stack>)
}
