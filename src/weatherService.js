const API_KEY = "65623ce321618b0ad91b64720ca2278a";
const makeIconURl = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@2x.png`;
const getFormattedWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);
  // console.log(data)
  const {
    weather,
    main: { temp, feels_like, humidity, pressure, temp_max, temp_min },
    wind: { speed },
    sys: { country },
    name,
  } = data;
  const { description, icon } = weather[0];
  return {
    temp,
    feels_like,
    humidity,
    pressure,
    temp_max,
    temp_min,
    speed,
    country,
    name,
    description,
    iconURL:makeIconURl(icon),
  };
};
export { getFormattedWeatherData };
