import "./App.css";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import { useState, useEffect } from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCityKey, getCityWeather, getCityForecast } from "./utils";
import { setCity, addData, setForecast, setWeather } from "./actions";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

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
    <BrowserRouter>
      <div className="navbar">
        <NavLink exact to="/">
          <button className="location-button">
            <span>Home</span>
          </button>
        </NavLink>
        <NavLink exact to="/favorites">
          <button className="location-button">
            <i data-feather="map-pin" />
            <span>Favorites</span>
          </button>
        </NavLink>
      </div>
      {/* 
        {page === "home" ? <Home /> : <Favorites />}
      </div> */}
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
