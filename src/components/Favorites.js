import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SavedCity from "./SavedCity";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div>
      {favorites?.map((savedCity, i) => (
        <SavedCity key={`city-${i}`} city={savedCity} />
      ))}
    </div>
  );
}
