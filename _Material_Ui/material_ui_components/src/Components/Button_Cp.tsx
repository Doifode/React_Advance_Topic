import React from 'react';
import { Button, Stack, IconButton, ButtonGroup } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
export const Button_Cp = () => {
    return (
        <Stack spacing={4}>

            <Stack spacing={2} direction={"row"}>
                <Button variant='text'> Text</Button>
                <Button variant='outlined'> OutLined</Button>
                <Button variant='contained'> Button</Button>
            </Stack>
            <Stack spacing={2} direction={"row"}>
                <Button variant='contained' color="primary"> Button</Button>
                <Button variant='contained' color='secondary'> Button</Button>
                <Button variant='contained' color="error"> Button</Button>
                <Button variant='contained' color='warning'> Button</Button>
                <Button variant='contained' color='info'> Button</Button>
                <Button variant='contained' color='success'> Button</Button>


            </Stack>
            <Stack spacing={2} direction={"row"}>
                <Button variant='contained' size="small"> Text</Button>
                <Button variant='contained' size="medium"> contained</Button>
                <Button variant='contained' size="large"> Button</Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="outlined" startIcon={<SendIcon />}>send  </Button>
                <Button variant="outlined" endIcon={<SendIcon />}> send </Button>
                <IconButton>
                    <SendIcon />
                </IconButton>
            </Stack>
            <Stack spacing={2} direction="row">
                <ButtonGroup variant="text" orientation='vertical'>
                <Button  size='small'>First</Button>
                <Button  size='small'>Second</Button>
                <Button  size='small'>Third</Button>
                <Button  size='small'>Fourth</Button>
                </ButtonGroup>

            </Stack>
        </Stack>
    )
}
