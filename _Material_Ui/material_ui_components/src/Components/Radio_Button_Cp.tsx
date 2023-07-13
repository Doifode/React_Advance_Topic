import React, { ChangeEvent, useState } from 'react'
import {
    RadioGroup, FormControl, FormControlLabel, FormLabel, Radio, Box
} from "@mui/material"

export const Radio_Button_Cp = () => {
    const [value, setValue] = useState<string>('')
    const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        console.log({ value })
    }
    return (
        <Box>

            <FormControl>
                <FormLabel>Radio Button Select</FormLabel>
                <RadioGroup
                    row
                    aria-label="gender"
                    name="gender1"
                    onChange={HandleChange}

                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>

            </FormControl>

        </Box>
    )
}
