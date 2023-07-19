import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Grid } from "@mui/material"

// const img1 = ["https://sacredheartsitapur.org/wp-content/uploads/2019/11/slidernew1-768x215.png","https://sacredheartsitapur.org/wp-content/uploads/2019/11/slidernew2-768x215.png" ];
const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px',
    transform: 'scale(0.5)'
}
const slideImages = [
    {
        url: "https://sacredheartsitapur.org/wp-content/uploads/2019/11/slidernew1-768x215.png",
        // caption: 'Slide 1'
    },
    {
        url: "https://sacredheartsitapur.org/wp-content/uploads/2019/11/slidernew2-768x215.png",

    },
    
];
export default function Carousel() {
    return (
       

        <Grid container spacing={3}>
            <Grid item xs={1}>
                {/* <Item>variable width content</Item> */}
                
            </Grid>
            <Grid item xs={12} >
                {/* <Item> */}
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div key={index}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
                            </div>
                        </div>
                    ))}
                </Slide>
                {/* </Item> */}
            </Grid>
            <Grid item xs={1}>
                
            </Grid>
        </Grid>
    )
}
