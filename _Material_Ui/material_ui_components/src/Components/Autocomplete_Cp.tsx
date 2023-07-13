import React from 'react'
import { Autocomplete, Stack, TextField } from "@mui/material"
export const Autocomplete_Cp = () => {
    const options = ['first', 'second', 'third', 'fourth', 'fifth', 'six']
    return (
        <Stack spacing={4}>
            <Stack direction={"row"} spacing={2}>
                <Autocomplete
                    options={options}
                    getOptionLabel={(option) => option}
                    renderInput={(param) => <TextField {...param} label="Choose " />}
                />
            </Stack>

        </Stack>
    )
}
