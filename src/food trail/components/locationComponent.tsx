import { FoodLocation } from "../types";

interface Props {
  location: FoodLocation;
  index: number;
  handleToggleLocation: (loc: FoodLocation, idx: number) => void;
  handleDeleteLocation: (loc: FoodLocation, idx: number) => void;
}

function LocationComponent({
  location,
  index,
  handleToggleLocation,
  handleDeleteLocation,
}: Props) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{location.title}</td>
      <td>
        <input
          type="checkbox"
          checked={location.visited}
          onChange={() => handleToggleLocation(location, index)}
        />
      </td>
      <td>
        <button onClick={() => handleDeleteLocation(location, index)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default LocationComponent;
