import React, { useEffect } from "react";
import { getCityForecast } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../actions";

export default function CitySection() {
  //states
  const city = useSelector((state) => state.city);
  const dispatch = useDispatch();

  useEffect(() => {
    getCityForecast(city.key).then((res) => {
      res.forEach((day) => dispatch(addData(day)));
    });
  }, []);
  useEffect(() => {
    console.log(city);
  }, [city]);
  return <div></div>;
}
