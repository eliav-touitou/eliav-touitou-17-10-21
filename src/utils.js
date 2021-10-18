import axios from "axios";
const apiKey = "XgnNRA3bbGi4WGb1CwngGF0AIeM6GaVf";

export const getCityKey = async (city) => {
  const baseUrl =
    "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${apiKey}&q=${city}`;
  try {
    const data = await axios.get(baseUrl + query);
    const response = data.data[0];
    const cityKey = response.Key;
    return cityKey;
  } catch (err) {
    console.log(err.message);
  }
};

export const getCityWeather = async (key) => {
  const baseUrl = `http://dataservice.accuweather.com/currentconditions/v1/${key}`;
  const query = `?apikey=${apiKey}`;
  try {
    const response = await axios.get(baseUrl + query);
    const data = response.data[0].Temperature.Metric.Value;
    const weather = Math.round(data);
    return weather;
  } catch (err) {
    console.log(err.message);
  }
};
export const getCityForecast = async (key) => {
  const baseUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}`;
  const query = `?apikey=${apiKey}`;
  try {
    const response = await axios.get(baseUrl + query);
    const forecast = await response.data.DailyForecasts;
    return forecast;
    // return data;
  } catch (err) {
    console.log(err.message);
  }
};
