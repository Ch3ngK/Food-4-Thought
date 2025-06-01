import LocationComponent from "./locationComponent";
import LocationInput from "./locationInput";
import { FoodLocation } from "../types";
import './food-trail-table.css';

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
            <th className='a'>#</th>
            <th className='Location'>Location</th>
            <th className='Visited'>Visited</th>
            <th className='Action'>Action</th>
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
