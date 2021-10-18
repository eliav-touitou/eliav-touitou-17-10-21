import axios from "axios";
const apiKey = "RvQXQGEJUAiEWS3ZydvVEPytjK6K2hJe";

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

const getDayByDate = (date) => {
  const fullDate = new Date(date);
  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  const dayOfWeek = weekday[fullDate.getDay()];
  return dayOfWeek;
};

const convertToCelsius = (far) => {
  const celsius = Math.round(((far - 32) * 5) / 9);
  return celsius;
};

export const getCityForecast = async (key) => {
  const baseUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}`;
  const query = `?apikey=${apiKey}`;
  try {
    const response = await axios.get(baseUrl + query);
    const dailyForecasts = await response.data.DailyForecasts;
    let forecast = [];

    dailyForecasts.forEach((day) => {
      const dayObj = {};
      dayObj.day = getDayByDate(day.Date);
      dayObj.forecast = {
        max: convertToCelsius(day.Temperature.Maximum.Value),
        min: convertToCelsius(day.Temperature.Minimum.Value),
        dayState: day.Day.IconPhrase,
        nightState: day.Night.IconPhrase,
      };
      forecast.push(dayObj);
    });

    return forecast;
    // return data;
  } catch (err) {
    console.log(err.message);
  }
};
