import '../css/home.css'
import Listing from './listing';
import Side from "./side";
import vid from '../assets/BgVid.mp4'
import slide1 from '../assets/images/slide1.png'
import slide2 from '../assets/images/slide2.png'
import slide3 from '../assets/images/slide3.png'
import left from '../assets/images/left-arrow.png'
import right from '../assets/images/right-arrow.png'
import Header from "./header";
import Footer from "./footer";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Home() {
    const dataset = [{
        title: "Who are we?",
        content: "The beet block chain beats any transaction validation service out there."
    }, {
        title: "Best beet solutions",
        content: "Our transaction service provides a clear and efficient way to properly process transactions made up to the international level. Beet centers every transaction by adding it to the blockchain."
    }, {
        title: "The founding of Beet",
        content: "Beet was established in November of 1979 when our owner came home from the grocery store, and he discovered that he had purchased beets instead of potato sammiches."
    }]

    const [visibleIndex, setVisibleIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 10000);
        return () => clearInterval(timer);
    }, []);

    const images = [slide1, slide2, slide3];

    const handlePrev = () => {
        setVisibleIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
    };

    const handleNext = () => {
        setVisibleIndex((prevIndex) => (prevIndex + 1) % 3);
    };

    return (
        <>
            <Header/>
            <div className={'home_wrap'}>
                <div className="video-container">
                    <div className={'caption'}>
                    <p>Beet brings revolution</p>
                        <Link to='/Login'>Get Started</Link>
                    </div>
                    <video autoPlay muted loop>
                        <source src={vid} type="video/mp4" />
                    </video>
                </div>
                <div className={'content_wrap'}>
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className={'listing_grid'}>
                            {Listing(dataset[index])}
                        </div>
                    ))}
                </div>
                <div className={'slide_cont'}>
                    <div className={'overlay_image'}>
                        <div className={'left'} onClick={handlePrev}><img id={'left_icon'} src={left} alt="Left"/></div>
                        <div className={'right'} onClick={handleNext}><img id={'right_icon'} src={right} alt="Right"/></div>
                    </div>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            style={{ display: index === visibleIndex ? 'block' : 'none' }}
                            alt={`Slide ${index + 1}`}
                        />
                    ))}
                </div>
                <div className={'about_cont'}>
                    <h2>
                        What We Beet For
                    </h2>
                    <p>
                        Payment processing is an essential part of the modern society.
                        Millions of transactions occur daily throughout the world, and we
                        ensure that our users are safe throughout the process.
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    );
}


export default Home;