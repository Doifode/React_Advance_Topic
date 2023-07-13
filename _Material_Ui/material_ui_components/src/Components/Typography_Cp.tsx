import React from 'react';
import { Typography } from '@mui/material';

export const Typography_Cp = () => {
    return (
        <>
            <Typography variant='h1'> h1 variant</Typography>
            <Typography variant='h2'> h2 variant</Typography>
            <Typography variant='h3'> h3 variant</Typography>
            <Typography variant='h4'> h4 variant</Typography>
            <Typography variant='h5'> h5 variant</Typography>
            <Typography variant='h6'> h6 variant</Typography>
            <Typography variant='h6' gutterBottom>Gutter botton</Typography>
            <Typography variant='h6' gutterBottom component="div"> div</Typography>
            <Typography gutterBottom component="div" variant='body1'> body1</Typography>
            <Typography gutterBottom component="div" variant='body2'>body2</Typography>
            <Typography gutterBottom component="div" variant='subtitle1'> subtitle1t</Typography>
            <Typography gutterBottom component="div" variant='subtitle2'> subtitle2</Typography>

        </>
    )
}
