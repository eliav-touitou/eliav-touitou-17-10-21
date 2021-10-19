import "./App.css";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import { useState, useEffect } from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCityKey, getCityWeather, getCityForecast } from "./utils";
import { setCity, addData, setForecast, setWeather } from "./actions";

function App() {
  //states
  const [page, setPage] = useState("home");
  const city = useSelector((state) => state.city);
  const favorites = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  useEffect(() => {
    getCityForecast(city.key)
      // .then((forecast) => console.log(forecast))
      .then((forecast) =>
        dispatch(setForecast({ cityKey: city.key, forecast }))
      )
      .catch((err) => console.log(err));
    getCityWeather(city.key)
      // .then((forecast) => console.log(forecast))
      .then((degrees) => dispatch(setWeather({ cityKey: city.key, degrees })))
      .catch((err) => console.log(err));
  }, [city]);

  return (
    // <div className="App container">
    //
    // </div>
    <>
      <div className="navbar">
        <button
          className="location-button"
          onClick={() => {
            setPage("home");
          }}
        >
          {" "}
          <i data-feather="map-pin" />
          <span>Home</span>
        </button>
        <button
          className="location-button"
          onClick={() => {
            setPage("favorites");
          }}
        >
          {" "}
          <i data-feather="map-pin" />
          <span>Favorites</span>
        </button>
      </div>
      <div className="container">
        {page === "home" ? <Home /> : <Favorites />}
      </div>
    </>
  );
}

export default App;
