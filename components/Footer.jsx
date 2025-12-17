import React from 'react';
import { Paper, Divider } from '@mui/material';

function Footer(props) {
    return (
        <>
        <Divider style={{marginBottom: 20}}/>
        <Paper sx={{
            position: 'fixed',
            button : 0,
            padding: 2,
            width: '100%',
        }} square variant="outlined">
            Footer
        </Paper>
        </>
    );
}

export default Footer;
