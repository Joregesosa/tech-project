// Camera: Provide a button labeled “Take Photo” which triggers the 
// camera plugin (on web fallback to file picker). 
// Display the photo on the page.

import React from 'react';
import { Geolocation } from '@capacitor/geolocation';
import { Box, Button, Typography } from '@mui/material';




export default function Capacitor() {
    const [geolocation, setGeolocation] = React.useState<Position>();

    const getCurrentPosition = async (): Promise<void> => {
        const coordinates = await Geolocation.getCurrentPosition();
        setGeolocation(coordinates);
    }

    return (
        <>
            <Typography variant="h4" component="h1" align="center">
                Capacitor - Geolocation
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <Button color='primary' variant='contained' onClick={getCurrentPosition}>Get Current Position</Button>

                {geolocation && (
                    <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2,  backgroundColor: 'darkgray', color: 'white', p: 2, borderRadius: 2 }}>
                        <Typography variant="h6" component="p" >
                            Latitude: <Typography color='success' component="span" >
                                {geolocation.coords.latitude}
                            </Typography>
                        </Typography>
                        <Typography variant="h6" component="p" >
                            Latitude: <Typography color='success' component="span" >
                                {geolocation.coords.latitude}
                            </Typography>
                        </Typography>
                    </Box>
                )}
            </Box>


        </>
    );
}

interface Position {
    coords: {
        latitude: number;
        longitude: number;
    };
}

