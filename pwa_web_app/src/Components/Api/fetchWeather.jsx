import axios from "axios";

const apiURL = `https://api.openweathermap.org/data/2.5/weather`;
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeather = async (query) => {
  const requestHeader = {
    params: {
      q: query,
      units: `metric`,
      APPID: apiKey,
    },
  };

  try {
    const response = await axios.get(apiURL, requestHeader);
    if (response.status !== 200) {
      throw new Error(`Error while getting weather: ${response.statusText}`);
    }
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
