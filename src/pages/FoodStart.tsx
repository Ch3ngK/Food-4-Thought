// src/pages/FoodStart.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FoodStart() {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!location.trim()) return;

    // Pass the location as a query param or state
    navigate("/trail", { state: { firstLocation: location } });
  };

  return (
    <div className="page-container">
      <h1>Welcome to the Food Trail! 🍔🍝</h1>
      <h3>Add a Food Location below to start </h3>
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
        />
        <button
          type="submit"
          style={{
            padding: "0.5rem 1.2rem",
            fontSize: "1rem",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default FoodStart;
