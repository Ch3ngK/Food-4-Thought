import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/header";
import LocationManager from "./components/locationManager";
import { FoodLocation } from "./types";
import "./FoodTrail.css"; 

function FoodTrail() {
  const location = useLocation();
  const navigate = useNavigate();
  const [locations, setLocations] = useState<FoodLocation[]>([]);

  // Add first location from state (passed from FoodStart)
  useEffect(() => {
    const state = location.state as { firstLocation?: string };
    if (state?.firstLocation) {
      setLocations([{ title: state.firstLocation, visited: false }]);
    }
  }, [location.state]);

  // Redirect to start page if no more locations
  useEffect(() => {
    if (locations.length === 0) {
      const timeout = setTimeout(() => navigate("/"), 800);
      return () => clearTimeout(timeout);
    }
  }, [locations, navigate]);

  const addNewLocation = (title: string) => {
    setLocations((prev) => [...prev, { title, visited: false }]);
  };

  const toggleLocation = (loc: FoodLocation, index: number) => {
    setLocations((prev) =>
      prev.map((l, i) => (i === index ? { ...l, visited: !l.visited } : l))
    );
  };

  const deleteLocation = (_: FoodLocation, index: number) => {
    setLocations((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="background-img-5">
      <div className="dark-overlay"></div>
      <div className="text-box-5">
      <Header locations={locations}/>
      <main>
        <LocationManager
          locations={locations}
          handleAddNewLocation={addNewLocation}
          handleToggleLocation={toggleLocation}
          handleDeleteLocation={deleteLocation}
        />
      </main>
      </div>
    </div>
  );
}

export default FoodTrail;

