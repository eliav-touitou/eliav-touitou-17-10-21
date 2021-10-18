import React, { useEffect } from "react";
import { removeFromFavorites } from "../actions";
import { useDispatch, useSelector } from "react-redux";

export default function SavedCity({ city }) {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeFromFavorites(city.key));
  };

  return (
    <div>
      <button onClick={remove}>delete!</button>
      {city.name}
    </div>
  );
}
