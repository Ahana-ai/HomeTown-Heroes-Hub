// DataPrivacySettings.jsx
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
    FormGroup,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const DataPrivacySettings = () => {
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
                Data Privacy Settings
            </Typography>
            <Divider mb={3} />
            <List
                sx={{
                    width: '70%',
                    margin: 'auto',
                }}
            >
                {/* Account Privacy */}
                <ListItem>
                    <LockIcon sx={{ color: 'grey', mr: 2, fontSize: '2rem' }} />
                    <ListItemText
                        primary="Account Privacy"
                        sx={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            color: 'darkblue',
                            mb: 1,
                        }}
                    />
                    {/* Toggle for account privacy settings */}
                    <Switch
                    // Add necessary state and onChange handler for account privacy settings
                    />
                </ListItem>
                <Divider mb={3} />

                {/* Email Privacy */}
                <ListItem>
                    <AlternateEmailIcon sx={{ color: 'grey', mr: 2, fontSize: '2rem' }} />
                    <ListItemText
                        primary="Email Privacy"
                        sx={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            color: 'darkblue',
                            mb: 1,
                        }}
                    />
                    {/* Toggle for email privacy settings */}
                    <Switch
                    // Add necessary state and onChange handler for email privacy settings
                    />
                </ListItem>
                <Divider mb={3} />

                {/* Notifications Privacy */}
                <ListItem>
                    <NotificationsActiveIcon
                        sx={{ color: 'grey', mr: 2, fontSize: '2rem' }}
                    />
                    <ListItemText
                        primary="Notifications Privacy"
                        sx={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            color: 'darkblue',
                            mb: 1,
                        }}
                    />
                    {/* FormGroup for managing specific notification preferences */}
                    <FormGroup>
                        <FormControlLabel
                            control={<Switch />}
                            label="Push Notifications"
                        // Add necessary state and onChange handler for push notifications
                        />
                        <FormControlLabel
                            control={<Switch />}
                            label="Email Notifications"
                        // Add necessary state and onChange handler for email notifications
                        />
                    </FormGroup>
                </ListItem>
                <Divider mb={3} />

                {/* Save Button */}
                <ListItem>
                    {/* Button to save data privacy settings */}
                    {/* Add onClick handler to save data privacy settings */}
                </ListItem>
            </List>
        </Box>
    );
};

export default DataPrivacySettings;
