import React from 'react';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
    Switch,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SecurityIcon from '@mui/icons-material/Security';

const SignInSecurityPage = () => {
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
                Security Options
            </Typography>
            <Divider mb={3} />
            <List
                sx={{
                    width: '70%',
                    margin: 'auto',
                }}
            >
                {/* Password */}
                <ListItem>
                    <LockIcon sx={{ color: 'grey', mr: 2, fontSize: '2rem' }} />
                    <ListItemText
                        primary="Password"
                        sx={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            color: 'darkblue',
                            mb: 1,
                        }}
                    />
                    {/* Update Password */}
                    {/* Add necessary state and onChange handler for updating password */}
                </ListItem>
                <Divider mb={3} />

                {/* Two-Factor Authentication */}
                <ListItem>
                    <PeopleOutlineIcon sx={{ color: 'grey', mr: 2, fontSize: '2rem' }} />
                    <ListItemText
                        primary="Two-Factor Authentication"
                        sx={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            color: 'darkblue',
                            mb: 1,
                        }}
                    />
                    {/* Toggle for enabling/disabling Two-Factor Authentication */}
                    <Switch
                    // Add necessary state and onChange handler for enabling/disabling Two-Factor Authentication
                    />
                </ListItem>
                <Divider mb={3} />

                {/* Account Security */}
                <ListItem>
                    <SecurityIcon sx={{ color: 'grey', mr: 2, fontSize: '2rem' }} />
                    <ListItemText
                        primary="Account Security"
                        sx={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            color: 'darkblue',
                            mb: 1,
                        }}
                    />
                    {/* Security-related settings */}
                    {/* Add necessary state and onChange handler for security-related settings */}
                </ListItem>
                <Divider mb={3} />

                {/* Save Button */}
                <ListItem>
                    {/* Button to save security-related changes */}
                    {/* Add onClick handler to save security-related changes */}
                </ListItem>
            </List>
        </Box>
    );
};

export default SignInSecurityPage;
