// CuisinePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cuisinePage.css';
import logo from './pictures/Food4Thought.png';
import instagram from './pictures/instagram-icon.png';
import twitter from './pictures/twitter-icon.png';
import facebook from './pictures/facebook-icon.png';
import tiktok from './pictures/tiktok-icon.png';

// Importing cuisine images
import westernImg from './pictures/western-demo.png';
import chineseImg from './pictures/chinese.png';
import indianImg from './pictures/indian.png';
import japaneseImg from './pictures/japanese.png';
import koreanImg from './pictures/korean.png';
import thaiImg from './pictures/thai.png';
import vietImg from './pictures/viet.png';
import malayImg from './pictures/malay.png';

function CuisinePage() {
  const navigate = useNavigate();

  const handleCuisineClick = (cuisineName: string) => {
    navigate(`/cuisine/${cuisineName.toLowerCase()}`);
  };

  const cuisines = [
    { name: 'Western', img: westernImg },
    { name: 'Chinese', img: chineseImg },
    { name: 'Indian', img: indianImg },
    { name: 'Japanese', img: japaneseImg },
    { name: 'Korean', img: koreanImg },
    { name: 'Thai', img: thaiImg },
    {name: 'Vietnamese', img: vietImg },
    { name: 'Malaysian', img:malayImg }
    // Add more as needed
  ];

  return (
    <div className="CuisinePage">
      <div className="background-img"></div>
      <div className="header-box">
        <img id="Logo" src={logo} alt="Food 4 Thought Logo" />
        <img id="Instagram" src={instagram} alt="Instagram icon" />
        <img id="Twitter" src={twitter} alt="Twitter icon" />
        <img id="Facebook" src={facebook} alt="Facebook icon" />
        <img id="Tiktok" src={tiktok} alt="Tiktok icon" />
      </div>
      <div className="main-box">
        <h1 className="page-title">Choose Your Cuisine !</h1>
        <div className="cuisine-grid">
          {cuisines.map((cuisine, index) => (
            <div
              key={index}
              className="cuisine-item"
              onClick={() => handleCuisineClick(cuisine.name)}
            >
              <img src={cuisine.img} alt={`${cuisine.name} icon`} className="cuisine-img" />
              <div className="cuisine-name">{cuisine.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CuisinePage;

