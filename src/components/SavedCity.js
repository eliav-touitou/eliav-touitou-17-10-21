import React, { useEffect } from "react";
import { removeFromFavorites, addData } from "../actions";
import { useDispatch, useSelector } from "react-redux";

export default function SavedCity({ city }) {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeFromFavorites(city.key));
    dispatch(addData({ isSaved: false }));
  };

  return (
    <div>
      <button onClick={remove}>delete!</button>
      {city.name}
    </div>
  );
}
