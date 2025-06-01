import React from 'react';
import './Home.css';
import logo from './pictures/Food4Thought.png';
import instagram from './pictures/instagram-icon.png';
import twitter from './pictures/twitter-icon.png';
import facebook from './pictures/facebook-icon.png';
import tiktok from './pictures/tiktok-icon.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import newspaper from './pictures/newspaper.jpg';
import western from './pictures/western-demo.png';
import yongtaufu from './pictures/yong-tau-fu-demo.jpg';
import nasilemak from './pictures/nasi-lemak-demo.jpg';
import star from './pictures/star.png';
import halfstar from './pictures/half-star.png';
import foodtrailbackground from './pictures/food-trail-background.jpg';
import { Link } from 'react-router-dom';

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
            <div className="Grey-box-1">
                <img id="Logo-1" src={logo} alt="Food 4 Thought Logo" />
                <img id="Instagram" src={instagram} alt="Instagram icon" />
                <img id="Twitter" src={twitter} alt="Twitter icon" />
                <img id="Facebook" src={facebook} alt="Facebook icon" />
                <img id="Tiktok" src={tiktok} alt="Tiktok icon" />
                <div className="Welcome-1">Welcome Benjamin,</div>
            </div>
            <div className="text-box-1">
                <div className="Grey-box-2">
                    <Link to="/cuisines" className="Cuisines-text-1">Cuisines</Link>
                    <div className="Popular-text-1">Popular</div>
                    <div className="Home-text-1">Home</div>
                    <div className="About-text-1">About</div>
                    <div className="Create-food-trail-text-1">Create food trail today!</div>
                </div>
                <div className="Black-box-1">
                  <div className="Trending">Trending today!</div>  
                </div>
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
                <br></br><br></br><br></br>
                <div className="Black-box-2">
                    <div className="Fresh-from-community-text">Fresh from the community</div>
                </div>
                <div className="Newspaper-container">
                    <img id="Newspaper" src={newspaper} alt="Newspaper" />
                    <div className="Newspaper-overlay"></div>
                    <div className="Comment-1-box">
                        <div className="Comment-1-text">Cheap and affordable western at ang mo kio coffeeshop</div>
                        <img id="Western-demo" src={western} alt="Western food demo" />
                        <img id="rating-1" src={star} alt="4.5 stars rating-1" />
                        <img id="rating-2" src={star} alt="4.5 stars rating-2" />
                        <img id="rating-3" src={star} alt="4.5 stars rating-3" />
                        <img id="rating-4" src={star} alt="4.5 stars rating-4" />
                        <img id="rating-5" src={halfstar} alt="4.5 stars rating-5" />
                        <div className="Username-1">By: Foodreviewer123</div>
                    </div>
                    <div className="Comment-2-box">
                        <div className="Comment-2-text">Best Yong Tau Fu in Singapore, must try!</div>
                        <img id="Yong-Tau-Fu-demo" src= {yongtaufu} alt="Yong Tau Fu demo" />
                        <img id="rating-6" src={star} alt="4.5 stars rating-6" />
                        <img id="rating-7" src={star} alt="4.5 stars rating-7" />
                        <img id="rating-8" src={star} alt="4.5 stars rating-8" />
                        <img id="rating-9" src={star} alt="4.5 stars rating-9" />
                        <img id="rating-10" src={halfstar} alt="4.5 stars rating-10" />
                        <div className="Username-2">By: ilovefood123</div>
                    </div>
                    <div className="Comment-3-box">
                        <div className="Comment-3-text">Best nasi lemak in Singapore, must try!</div>
                        <img id="Nasi-Lemak-demo" src= {nasilemak} alt="Nasi Lemak demo" />
                        <img id="rating-11" src={star} alt="5 stars rating-11" />
                        <img id="rating-12" src={star} alt="5 stars rating-12" />
                        <img id="rating-13" src={star} alt="5 stars rating-13" />
                        <img id="rating-14" src={star} alt="5 stars rating-14" />
                        <img id="rating-15" src={star} alt="5 stars rating-15" />
                        <div className="Username-3">By: foodislife123</div>
                    </div>
                </div>
                <button type="submit" className="See-all-button">See more</button>
                <div className="Image-container">
                    <img id="Food-trail-background" src={foodtrailbackground} alt="Food trail background"/>
                    <Link to="/food-start" className="Hover-button-link">Create your food trail!</Link>
                    <div className="Dark-overlay"></div>
                </div>
                <div className="Quote">~Redefining food discovery~</div>
            </div>
        </div> 
    );
}

export default Home;