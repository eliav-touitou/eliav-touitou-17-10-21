import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { setCity, setError } from "../actions";
import { useDispatch } from "react-redux";
import axios from "axios";
const apiKey = "8qKQJKQJgVNWGDiUleLSiKOi8UOUtgZx";
const baseUrl =
  "https://dataservice.accuweather.com/locations/v1/cities/autocomplete";

export default function SearchBox() {
  const [citiesOption, setCitiesOption] = useState([]);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  let cancelToken = axios.CancelToken.source();
  const citySearchAutocomplete = async (str) => {
    const query = `?apikey=${apiKey}&q=${str}`;

    try {
      const response = await axios.get(baseUrl + query, {
        cancelToken: cancelToken.token,
      });
      const data = response.data;
      const cities = [];
      if (data) {
        data?.forEach((city) => {
          const cityObj = {};
          cityObj.label =
            city.LocalizedName + " / " + city.Country.LocalizedName;
          cityObj.key = city.Key;
          cities.push(cityObj);
        });
      }
      return cities;
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log("caught cancel");
      } else {
        throw err;
      }
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      citySearchAutocomplete(search)
        .then((res) => {
          if (res) {
            setCitiesOption(res);
          }
        })
        .catch((err) => dispatch(setError(err)));
    }, 300);
    return () => {
      clearTimeout(timer);
      cancelToken.cancel();
    };
  }, [search]);

  const searchCity = (value) => {
    if (value) {
      dispatch(setCity(value));
    }
  };

  return (
    <>
      <Autocomplete
        onChange={(event, value) => searchCity(value)}
        disablePortal
        id="combo-box-demo"
        options={citiesOption}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            id="textField"
            {...params}
            label="City"
            onChange={(e) => setSearch(e.target.value)}
          />
        )}
      />
    </>
  );
}
