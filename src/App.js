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
    async function getDefaultCityKey() {
      const defaultCityKey = await getCityKey("tel-aviv");
      dispatch(
        setCity({
          name: "tel-aviv",
          key: defaultCityKey,
        })
      );

      // dispatch(
      //   addData({
      //     weather: defaultCityWeather,
      //     forecast: defaultCityForecast,
      //   })
      // );
    }
    getDefaultCityKey();
  }, []);

  useEffect(() => {
    async function getDefaultCityData() {
      try {
        const defaultCityWeather = await getCityWeather(city.key);
        const defaultCityForecast = await getCityForecast(city.key);

        dispatch(
          addData({
            weather: defaultCityWeather,
            forecast: defaultCityForecast,
          })
        );
      } catch (err) {
        console.log(err);
      }
    }

    getDefaultCityData();
  }, [city]);
  // useEffect(() => {
  //   async function getDefaultCityData () {
  //     const  DefaultCitykey = await
  //     getCityKey("tel-aviv")
  //       .then((key) => {
  //         dispatch(
  //           setCity({
  //             name: "Tel-aviv",
  //             key: key,
  //           })
  //         );
  //       })
  //       .catch((err) => console.log(err));
  //     getCityWeather(city.key)
  //       .then((res) => {
  //         dispatch(addData({ temperature: res }));
  //       })
  //       .catch((err) => console.log(err));

  //     getCityForecast(city.key)
  //       .then((res) => {
  //         dispatch(addData({ forecast: res }));
  //         console.log(res);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, []);

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
