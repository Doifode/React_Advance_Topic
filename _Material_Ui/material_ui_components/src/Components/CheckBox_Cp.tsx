import React, { useState } from 'react'
import { Box, FormControlLabel, Checkbox } from "@mui/material"
export const CheckBox_Cp = () => {
    const [value, setValue] = useState(false)
    const HandleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.checked);
        console.log({value});
        

    }
    return (
        <Box>
            <Box>
                <FormControlLabel
                    control={<Checkbox onChange={HandleCheck} checked={value} color="primary" />}
                    label="Check me out"
                />

            </Box>
        </Box>
    )
}
