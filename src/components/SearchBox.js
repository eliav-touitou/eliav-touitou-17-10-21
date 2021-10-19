import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { citySearchAutocomplete } from "../utils";
import { setCity, setError } from "../actions";
import { useDispatch } from "react-redux";

export default function SearchBox() {
  const [citiesOption, setCitiesOption] = useState([]);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    citySearchAutocomplete(search)
      .then((res) => {
        if (res) {
          setCitiesOption(res);
        }
      })
      .catch((err) => dispatch(setError(err)));
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
