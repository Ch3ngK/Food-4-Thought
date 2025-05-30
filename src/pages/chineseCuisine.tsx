// src/pages/CuisineDetailPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import '../style/chineseCuisine.css';

const sampleFoodPlaces = [
    {
      name: 'Dragon Palace',
      description: 'Authentic dim sum and Cantonese cuisine with a modern twist.',
    },
    {
      name: 'Sichuan Spicy House',
      description: 'Mouth-numbing spicy Sichuan dishes with fresh chili peppers.',
    },  
    {
      name: 'Lan Zhou Hand-Pulled Noodles',
      description: 'Delicious hand-pulled noodles served with rich broth.',
    },
  ];
  
function ChineseCuisine() {

    const { cuisineName } = useParams<{ cuisineName: string }>();

    return (
      <div className="ChineseCuisine">
        <div className="background-img"></div>
        <div className="content-box">
        <h1 className="cuisine-title">
            <span className="orange-box">{cuisineName} Cuisine</span>
        </h1>
          <p className="cuisine-description">
            Explore the best hidden gems and local favorites serving authentic {cuisineName} cuisine.
          </p>
  
          {/* Food Places Listing */}
          <div className="food-places-list">
          {sampleFoodPlaces.map((place, index) => (
            <div key={index} className="food-place-card">
                <div className="food-place-header">
                  <span className="place-number">{index + 1}.</span>
                  <h2 className="food-place-name">{place.name}</h2>
            </div>
            <p className="food-place-description">{place.description}</p>
        </div>
    ))}

          </div>
        </div>
      </div>
    );
  }
  
export default ChineseCuisine;