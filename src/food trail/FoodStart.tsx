// src/pages/FoodStart.tsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./FoodStart.css"; 

function FoodStart() {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!location.trim()) return;

    // Pass the location as a query param or state
    navigate("/food-trail", { state: { firstLocation: location } });
  };

  return (
  <div className="background-img-4">
  <div className="dark-overlay"></div>
  <div className="text-box-4">
    <div className="welcome-food-trail">Welcome to the Food Trail! 🍔🍝</div>
    <br></br>
    <div className="add-food-location">Add a Food Location below to start</div>
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <input
        type="text"
        placeholder="e.g. Maxwell Food Centre"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          width: "250px",
          marginRight: "1rem",
        }}
        required
      />
      <button className="add-button" type="submit">Add</button>
    </form>
  </div>
</div>
  );
}

export default FoodStart;
