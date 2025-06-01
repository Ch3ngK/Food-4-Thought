import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import SignUp from './SignUp';
import Home from './Home';
import FoodStart from './food trail/FoodStart';
import FoodTrail from './food trail/FoodTrail';
import Cuisine from './cuisines/src/cuisinePage';
import ChineseCuisine from './cuisines/src/pages/chineseCuisine';
import DragonPalace from './cuisines/src/pages/dragon-palace';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/food-start" element={<FoodStart />} />
        <Route path="/food-trail" element={<FoodTrail />} />
        <Route path="/cuisines" element={<Cuisine />} />
        <Route path="/cuisine/:cuisineName" element={<ChineseCuisine />} />
        <Route path='/dragon-palace' element={<DragonPalace />} />
       </Routes>
    </Router>
  );
}

export default App;