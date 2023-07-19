import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextareaAutosize } from '@mui/material';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >

    </Box>
);

export default function BasicCard() {
    return (
        <>
            <Card sx={{ maxWidth: 345 }} style={{marginLeft:"600px", marginTop:"20px"}}>
                <h2 style={{ textAlign: "center" }}>About us</h2>
                <CardContent style={{ padding: "25px" }}>
                    <Typography variant="body2" color="text.secondary">
                        Sacred Heart Hr. Sec. School is an unaided Christian minority English medium educational institution established and administered by the ‘Sacred Heart Catholic Education Society’, Sitapur, a charitabl and registered society under the Societies Registration Act XXI of 1860. It was founded in 1954
                        with the object of imparting modern education to Catholic students in a manner that will
                        conserve their “religion, language and culture” but admission is not denied to students professing other faiths.
                    </Typography>
                </CardContent>
            </Card>
         

        </>
    );
}

