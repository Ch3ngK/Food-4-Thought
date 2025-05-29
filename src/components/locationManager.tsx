import LocationComponent from "./locationComponent";
import LocationInput from "./locationInput";
import { FoodLocation } from "../types";

function LocationManager({
  locations,
  handleAddNewLocation,
  handleToggleLocation,
  handleDeleteLocation,
}: {
  locations: FoodLocation[];
  handleAddNewLocation: (title: string) => void;
  handleToggleLocation: (loc: FoodLocation, idx: number) => void;
  handleDeleteLocation: (loc: FoodLocation, idx: number) => void;
}) {
  return (
    <div>
      <LocationInput handleAddNewLocation={handleAddNewLocation} />
      <table className ="food-trail-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Location</th>
            <th>Visited</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location, index) => (
            <LocationComponent
              key={index}
              location={location}
              index={index}
              handleToggleLocation={handleToggleLocation}
              handleDeleteLocation={handleDeleteLocation}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LocationManager;
