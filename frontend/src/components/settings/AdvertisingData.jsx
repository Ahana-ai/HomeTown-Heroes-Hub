// AdvertisingDataSettings.jsx
import React from 'react';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
    Switch,
    FormControlLabel,
} from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const AdvertisingDataSettings = () => {
    return (
        <Box>
            <Typography
                variant="h5"
                mb={3}
                textAlign="center"
                sx={{
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    color: 'darkblue',
                }}
            >
                Advertising Data Settings
            </Typography>
            <Divider mb={3} />
            <List
                sx={{
                    width: '70%',
                    margin: 'auto',
                }}
            >
                {/* Personalized Ads */}
                <ListItem>
                    <MonetizationOnIcon sx={{ color: 'grey', mr: 2, fontSize: '2rem' }} />
                    <ListItemText
                        primary="Personalized Ads"
                        sx={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            color: 'darkblue',
                            mb: 1,
                        }}
                    />
                    {/* Toggle for personalized ads settings */}
                    <Switch
                    // Add necessary state and onChange handler for personalized ads settings
                    />
                </ListItem>
                <Divider mb={3} />

                {/* Ad Preferences */}
                <ListItem>
                    <ExploreIcon sx={{ color: 'grey', mr: 2, fontSize: '2rem' }} />
                    <ListItemText
                        primary="Ad Preferences"
                        sx={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            color: 'darkblue',
                            mb: 1,
                        }}
                    />
                    {/* Toggle for managing specific ad preferences */}
                    <FormControlLabel
                        control={<Switch />}
                        label="Show Interest-based Ads"
                    // Add necessary state and onChange handler for interest-based ads
                    />
                    <FormControlLabel
                        control={<Switch />}
                        label="Show Location-based Ads"
                    // Add necessary state and onChange handler for location-based ads
                    />
                </ListItem>
                <Divider mb={3} />

                {/* Save Button */}
                <ListItem>
                    {/* Button to save advertising data settings */}
                    {/* Add onClick handler to save advertising data settings */}
                </ListItem>
            </List>
        </Box>
    );
};

export default AdvertisingDataSettings;
