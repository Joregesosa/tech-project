import React, { JSX, useContext } from 'react'
import { AnalyticsContext } from '@/providers/AnalyticsProvider'
import { Box, Typography } from '@mui/material'

export function AnalyticsPanel(): JSX.Element {
    const { hoverEvents, clicks } = useContext(AnalyticsContext)
    return (
        <Box sx={{ bgcolor: 'gray', color: 'white', p: 2 }}>
            <Typography variant='h4' sx={{ textAlign: 'center' }}>Analytics Panel</Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <h2>Hover events: {hoverEvents}</h2>
                <h2>Clicks: {clicks}</h2>
            </Box>

        </Box>


    )

}