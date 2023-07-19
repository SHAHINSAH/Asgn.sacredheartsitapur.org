import React from 'react'
import Card from './Card';
import Footer from './Footer';
import Carousel from './Carousel';
import BottomSlides from './BottomSlides';

export default function Home() {
    return (
        <div style={{ backgroundImage: 'url("https://media.istockphoto.com/id/825778252/photo/blue-sky-and-white-clouds-background.jpg?s=612x612&w=0&k=20&c=u1jkNZutv8H344KPxrgtfIHOMuWdU4H8PQ7_rvSI-wI=")', backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
            <Carousel />
            <Card />
            <BottomSlides />
            <Footer />
        </div>
    )
}
