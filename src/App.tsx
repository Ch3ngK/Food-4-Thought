// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FoodStart from "./pages/FoodStart";
import FoodTrail from "./pages/FoodTrail";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FoodStart />} />
        <Route path="/trail" element={<FoodTrail />} />
      </Routes>
    </Router>
  );
}

export default App;
