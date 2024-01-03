// VisibilitySettings.jsx
import React from 'react';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
    Switch,
    Slider,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GroupIcon from '@mui/icons-material/Group';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const VisibilitySettings = () => {
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
                Visibility Settings
            </Typography>
            <Divider mb={3} />
            <List
                sx={{
                    width: '70%',
                    margin: 'auto',
                }}
            >
                {/* Profile Visibility */}
                <ListItem>
                    <VisibilityIcon sx={{ color: 'grey', mr: 2, fontSize: '2rem' }} />
                    <ListItemText
                        primary="Profile Visibility"
                        sx={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            color: 'darkblue',
                            mb: 1,
                        }}
                    />
                    {/* Toggle for setting profile visibility */}
                    <Switch
                    // Add necessary state and onChange handler for setting profile visibility
                    />
                </ListItem>
                <Divider mb={3} />

                {/* Connection Requests */}
                <ListItem>
                    <PersonAddAlt1Icon sx={{ color: 'grey', mr: 2, fontSize: '2rem' }} />
                    <ListItemText
                        primary="Connection Requests"
                        sx={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            color: 'darkblue',
                            mb: 1,
                        }}
                    />
                    {/* Toggle for allowing/denying connection requests */}
                    <Switch
                    // Add necessary state and onChange handler for allowing/denying connection requests
                    />
                </ListItem>
                <Divider mb={3} />

                {/* Group Visibility */}
                <ListItem>
                    <GroupIcon sx={{ color: 'grey', mr: 2, fontSize: '2rem' }} />
                    <ListItemText
                        primary="Group Visibility"
                        sx={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            color: 'darkblue',
                            mb: 1,
                        }}
                    />
                    {/* Slider for adjusting group visibility */}
                    <Slider
                    // Add necessary state and onChange handler for adjusting group visibility
                    />
                </ListItem>
                <Divider mb={3} />

                {/* Save Button */}
                <ListItem>
                    {/* Button to save visibility settings */}
                    {/* Add onClick handler to save visibility settings */}
                </ListItem>
            </List>
        </Box>
    );
};

export default VisibilitySettings;
