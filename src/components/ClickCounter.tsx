import React, { useContext, JSX } from 'react';
import { AnalyticsContext } from '@/providers/AnalyticsProvider';
import { Box, Button } from '@mui/material';



export function ClickCounter(): JSX.Element {
    const { logClick } = useContext(AnalyticsContext);
    return (
        <Box sx={{ bgcolor: 'blueviolet', color: 'white', p: 2, flexGrow: 1, display: 'grid', placeContent:'center' }} >
            <Button variant='contained' color='primary' onClick={logClick}>Click me</Button>

        </Box>
    )
}