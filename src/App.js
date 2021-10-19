import "./App.css";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCityWeather, getCityForecast } from "./utils";
import { setForecast, setWeather, setError } from "./actions";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  //states
  const city = useSelector((state) => state.city);
  const errorExisting = useSelector((state) => state.errorExisting);
  const notify = () =>
    toast("Sorry, there seem to be a problem with our server ");

  useEffect(() => {
    if (errorExisting) notify();
  }, [errorExisting]);

  const dispatch = useDispatch();

  useEffect(() => {
    getCityForecast(city.key)
      .then((forecast) =>
        dispatch(setForecast({ cityKey: city.key, forecast }))
      )
      .catch((err) => dispatch(setError(err)));
    getCityWeather(city.key)
      .then((degrees) => dispatch(setWeather({ cityKey: city.key, degrees })))
      .catch((err) => dispatch(setError(err)));
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
            <span>Favorites</span>
          </button>
        </NavLink>
      </div>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
        </Switch>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
