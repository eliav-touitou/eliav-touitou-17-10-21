import React from "react";
import { useSelector } from "react-redux";
import SavedCity from "./SavedCity";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className={"week-container"}>
      <ul className="week-list">
        {favorites?.map((savedCity, i) => (
          <SavedCity key={`city-${i}`} city={savedCity} />
        ))}
      </ul>
    </div>
  );
}
