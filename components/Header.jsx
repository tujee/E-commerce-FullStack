import React from 'react';
import { AppBar, Box, Container, Divider, IconButton, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header (props) {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Tienda Online Mateo
                    </Typography>
                    <Box sx={{flexGrow: 1, display : {xs : "none", md: "flex"}}}>
                        <Link to='/'>
                            <Button 
                                variant="contained" 
                                sx={{ my: 2, color: 'white', display: 'block' }}>
                                Home
                            </Button>
                        </Link>
                        <Link to='/faq'>
                            <Button 
                                variant="contained" 
                                sx={{ my: 2, color: 'white', display: 'block', marginLeft: 2 }}>
                                FAQ
                            </Button>   
                        </Link>
                    </Box>
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