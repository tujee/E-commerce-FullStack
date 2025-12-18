import React from 'react';
import { Card, CardContent, CardHeader, Typography, CardMedia } from '@mui/material';

function Feed(props) {
    
    return (
        <div style={style.feed}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    title={props.product.name}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={props.product.image ? props.product.image : 'https://blog.logomaster.ai/hs-fs/hubfs/starbucks%20logo%20current.jpg?width=1700&height=1148&name=starbucks%20logo%20current.jpg'}
                    alt={props.product.name}
                />  
                <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {props.product.description}
                    </Typography>
                    <p>$ {props.product.price}</p>
                    <p>{props.product.catalog ? props.product.catalog : 'Sin Categoria'}</p>
                </CardContent>
            </Card>
        </div>
    );
}
const style = {
    feed: {

    }
}

export default Feed;