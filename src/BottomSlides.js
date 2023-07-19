import React from 'react'
import { Slide } from 'react-slideshow-image';
import { Grid } from "@mui/material"


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
        url: "https://sacredheartsitapur.org/wp-content/uploads/2020/02/70-150x150.jpg",
        // caption: 'Slide 1'
    },
    {
        url: "https://sacredheartsitapur.org/wp-content/uploads/2020/02/77-150x150.jpg",

    },

];
const slideImagesTop = [
    {
        url: "https://sacredheartsitapur.org/wp-content/uploads/2022/11/oie_148932kRXICILX2.jpg",
        // caption: 'Slide 1'
    },
    {
        url: "https://sacredheartsitapur.org/wp-content/uploads/2022/11/oie_148150iBA5r3s8.jpg",

    },
    {
        url: "https://sacredheartsitapur.org/wp-content/uploads/2022/11/oie_148932kRXICILX2.jpg",
        // caption: 'Slide 2'
    },
    {
        url: "https://sacredheartsitapur.org/wp-content/uploads/2022/11/oie_148150iBA5r3s8.jpg",

    },
];
export default function BottomSlides() {
    return (


        <Grid container spacing={2} style={{padding:"100px", backgroundColor: "grey"}}>
            <Grid item xs={6}>
                <h1 style={{textAlign: "center"}}>Photo Gallery</h1>
                <Slide>

                    {slideImages.map((slideImage, index) => (
                        <div key={index}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
                            </div>
                        </div>
                    ))}
                </Slide>

            </Grid>
            <Grid item xs={6} >
                <h1 style={{textAlign: "center"}}>Kid's Corner</h1>
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
            <Grid item xs={6}>
                <h1 style={{textAlign: "center"}}>Happy Birthday</h1>
                
                    {/* {slideImages.map((slideImage, index) => (
                        <div key={index}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                               
                            </div>
                        </div>
                    ))} */}
                
            </Grid>
            <Grid item xs={6}>
                <h1 style={{textAlign: "center"}}>Toppers 2021-22</h1>
                <Slide>
                    {slideImagesTop.map((slideImage, index) => (
                        <div key={index}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
                            </div>
                        </div>
                    ))}
                </Slide>
            </Grid>
        </Grid>
    )
}
