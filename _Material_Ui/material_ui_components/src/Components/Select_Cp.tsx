import React, { useState } from 'react'
import { TextField, MenuItem, Box, Typography } from '@mui/material'

export const Select_Cp = () => {
    const [Country, setCountry] = useState<string[]>([])
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setCountry(typeof(value)=== 'string' ? value.split(',') :value) 

    }
    console.log(Country)
    return (

        <Box width={250}>
            <TextField label="Select Country" SelectProps={{ multiple: true }} fullWidth value={Country} onChange={handleChange} select>
                <MenuItem value="In1">India</MenuItem>
                <MenuItem value="In2">India</MenuItem>
                <MenuItem value="In3">India</MenuItem>
                <MenuItem value="In4">India</MenuItem>
                <MenuItem value="In5">India</MenuItem>

            </TextField>
            <Typography variant="h1">{Country}</Typography>
        </Box>
    )
}
