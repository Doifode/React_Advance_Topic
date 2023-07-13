import { InputAdornment, Stack, TextField } from '@mui/material'
import React from 'react'

const TextFiels_Cp = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction={"row"}>
                <TextField label="Name" variant="outlined" />
                <TextField label="Password" variant="filled" />
                <TextField label="Email" variant="standard" />

            </Stack>
            <Stack spacing={2} direction={"row"}>
                <TextField label="Email" variant="standard" size='small' />
                <TextField label="Small" size='small' type='password' />
                <TextField label="Password" size='small' type='password' />
                <TextField label="Address" size='small' helperText="Please enter your address..." />
                <TextField label="Address" size='small' error helperText="Please enter your address..." />

            </Stack>
            <Stack spacing={2} direction={"row"}>
                <TextField label="Amount" InputProps={{
                    endAdornment: <InputAdornment position='start' >$</InputAdornment>
                }} size='medium' />
                <TextField label="Weight" InputProps={{
                    endAdornment: <InputAdornment position='end' >Kg</InputAdornment>
                }} size='medium' />
            </Stack>


        </Stack>
    )
}

export default TextFiels_Cp