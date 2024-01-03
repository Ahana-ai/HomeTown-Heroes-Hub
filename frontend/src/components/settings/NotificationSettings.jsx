// NotificationSettings.jsx
import React from 'react';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
    Switch,
    FormGroup,
    FormControlLabel,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import SmsIcon from '@mui/icons-material/Sms';

const NotificationSettings = () => {
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
                Notification Settings
            </Typography>
            <Divider mb={3} />
            <List
                sx={{
                    width: '70%',
                    margin: 'auto',
                }}
            >
                {/* Push Notifications */}
                <ListItem>
                    <NotificationsIcon sx={{ color: 'grey', mr: 2, fontSize: '2rem' }} />
                    <ListItemText
                        primary="Push Notifications"
                        sx={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            color: 'darkblue',
                            mb: 1,
                        }}
                    />
                    {/* Toggle for push notifications settings */}
                    <Switch
                    // Add necessary state and onChange handler for push notifications settings
                    />
                </ListItem>
                <Divider mb={3} />

                {/* Email Notifications */}
                <ListItem>
                    <EmailIcon sx={{ color: 'grey', mr: 2, fontSize: '2rem' }} />
                    <ListItemText
                        primary="Email Notifications"
                        sx={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            color: 'darkblue',
                            mb: 1,
                        }}
                    />
                    {/* Toggle for email notifications settings */}
                    <Switch
                    // Add necessary state and onChange handler for email notifications settings
                    />
                </ListItem>
                <Divider mb={3} />

                {/* SMS Notifications */}
                <ListItem>
                    <SmsIcon sx={{ color: 'grey', mr: 2, fontSize: '2rem' }} />
                    <ListItemText
                        primary="SMS Notifications"
                        sx={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            color: 'darkblue',
                            mb: 1,
                        }}
                    />
                    {/* Toggle for SMS notifications settings */}
                    <Switch
                    // Add necessary state and onChange handler for SMS notifications settings
                    />
                </ListItem>
                <Divider mb={3} />

                {/* Save Button */}
                <ListItem>
                    {/* Button to save notification settings */}
                    {/* Add onClick handler to save notification settings */}
                </ListItem>
            </List>
        </Box>
    );
};

export default NotificationSettings;
