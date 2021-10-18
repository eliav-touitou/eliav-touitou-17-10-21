import "./App.css";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import { useState, useEffect } from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCityKey, getCityWeather, getCityForecast } from "./utils";
import { setCity, addData } from "./actions";

function App() {
  //states
  const [page, setPage] = useState("home");
  const city = useSelector((state) => state.city);
  const favorites = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  useEffect(() => {
    getCityKey("tel-aviv")
      .then((key) => {
        dispatch(
          setCity({
            name: "Tel-aviv",
            key: key,
          })
        );
      })
      .catch((err) => console.log(err));
    getCityWeather(city.key)
      .then((res) => {
        dispatch(addData({ temperature: res }));
      })
      .catch((err) => console.log(err));

    getCityForecast(city.key)
      .then((res) => {
        // dispatch(addData({ temperature: res }));
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <div className="navbar">
        <button
          onClick={() => {
            setPage("home");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            setPage("favorites");
          }}
        >
          Favorites
        </button>
      </div>
      {page === "home" ? <Home /> : <Favorites />}
    </div>
  );
}

export default App;
