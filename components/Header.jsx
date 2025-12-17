import React from 'react';
import { AppBar, Container, Divider, IconButton, Toolbar, Typography } from '@mui/material';

function Header (props) {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Tienda Online Mateo
                    </Typography>
                    <IconButton color='inherit' arial-label='Admin Access'>
                        <Typography variant="body1" sx={{ pr: 1}} >
                            Acceso Admin
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar> 
            <Divider style={{marginBottom: 20}}/>
        </div>
    );
}

export default Header ;