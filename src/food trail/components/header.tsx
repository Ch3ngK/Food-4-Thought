import { useState } from "react";
import { FoodLocation } from "../types";

interface HeaderProps {
  locations: FoodLocation[];
}

function Header({ locations }: HeaderProps) {
  const [name, setName] = useState<string | null>(null);

  const handleNameClick = () => {
    const input = prompt("What is your name?");
    if (input) setName(input);
  };

  const pending = locations.filter((loc) => !loc.visited).length;

  return (
    <header>
      <h1>🍜 Food Trail</h1>
      <div className="HeaderBox">
        <h2>Overview</h2>
        <p>
          Hello,{" "}
          <strong role="button" onClick={handleNameClick}>
            {name ?? "Guest"}
          </strong>
        </p>
        <p>
          {pending > 0 ? (
            <>You still have <strong>{pending}</strong> spots to try!</>
          ) : (
            "You've visited all the spots!"
          )}
        </p>
      </div>
    </header>
  );
}

export default Header;
