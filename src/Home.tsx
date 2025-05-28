import React from 'react';
import './Home.css';
import logo from './Food4Thought.png';
import instagram from './instagram-icon.png';
import twitter from './twitter-icon.png';
import facebook from './facebook-icon.png';
import tiktok from './tiktok-icon.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Home() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const images: { src: string; description: string }[] = [
        { src: "/chicken-rice.png", description: "Hainanese Chicken Rice - A Singaporean classic!" },
        { src: "/nasi-lemak.png", description: "Nasi Lemak - Fragrant rice with spicy sambal and more." },
        { src: "/nasi-briyani.png", description: "Nasi Briyani - Aromatic spiced rice with tender meat." }
        ];

    return (
        <div className="Home"> 
            <div className="background-img-1"></div>
            <img id="Logo-1" src={logo} alt="Food 4 Thought Logo" />
            <img id="Instagram" src={instagram} alt="Instagram icon" />
            <img id="Twitter" src={twitter} alt="Twitter icon" />
            <img id="Facebook" src={facebook} alt="Facebook icon" />
            <img id="Tiktok" src={tiktok} alt="Tiktok icon" />
            <div className="Welcome-1">Welcome Benjamin,</div>
            <div className="text-box-1">
                <div className="Black-box">
                  <div className="Trending">Trending today!</div>  
                </div>
                <div className="Red-box">
                    <Slider {...sliderSettings}>
                    
                    {images.map((item, idx) => (
                        <div key={idx} style={{ display: "flex", textAlign: 'center' }}>
                        <img 
                            src={item.src} 
                            alt={`carousel ${idx}`} 
                            style={{ width: "100%", borderRadius: "10px" }} 
                        /><p className="carousel-description">{item.description}
                        </p>
                        </div>
                    ))}
                    </Slider>
                </div>
                <br></br><br></br><br></br>
            </div>
            
        </div> 
    );
}

export default Home;