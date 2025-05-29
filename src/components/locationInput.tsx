import { useState, FormEvent } from "react";

export default function LocationInput({
  handleAddNewLocation,
}: {
  handleAddNewLocation: (title: string) => void;
}) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    handleAddNewLocation(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="food-input-form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter food location"
        className="food-input"
      />
      <button type="submit" className="btn btn-add">
        Add
      </button>
    </form>
  );
}
