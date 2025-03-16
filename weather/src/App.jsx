import { useState, useCallback, useEffect, useMemo } from 'react'
import { timeContext } from './context/time'
import Navbar from './components/Navbar';
import WeatherToday from './components/WeatherToday';
import OtherCountries from './components/OtherCountries';
import Highlight from './components/Highlight';
import Forecast from './components/Forecast';
import Search from './components/Search';
function App() {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const [year, setYear] = useState();
  
 /* useMemo(() => {
  let country = []
  let city = []
  let desc = []
  let temp = []
  let feelslike = []
  })*/
  // Get user's location using the Geolocation API
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      },
      (err) => console.log(err)
    );
  }, [])

  const now = new Date();

  // Define the fetch function using useCallback
  const fetchWeatherbylatlon = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.weatherstack.com/current?access_key=e58b44ca79974d0267a6585fcd794c7c&query=40.7831,-73.9712`
      );
      const data = await response.json();
      setWeather(data);
      setMonth(weather?.location?.localtime.split(' ')[0].split('-')[1])
      setDay(weather?.location?.localtime.split(' ')[0].split('-')[2])
      setYear(weather?.location?.localtime.split(' ')[0].split('-')[0])
    } catch (err) {

      console.error(err);
    }
  }, [weather?.location?.localtime]);
  // Automatically fetch weather when the component mounts
  useEffect(() => {
    fetchWeatherbylatlon(); // Fetch weather data
  }, [fetchWeatherbylatlon]);

   useEffect(() => {
      if(location){
        fetch(`https://api.weatherstack.com/current?access_key=e58b44ca79974d0267a6585fcd794c7c&query=${location}`)
        .then(response => response.json())
        .then(data => setWeather(data))
    }
   },[location])

  let update = {
    exactloc: weather?.location?.name,
    exactloca: weather?.location?.country,
    temp: weather?.current?.temperature,
    desc: weather?.current?.weather_descriptions[0],
    icon: weather?.current?.weather_icons[0],
    wind: weather?.current?.wind_speed,
    humidity: weather?.current?.humidity,
    feelslike: weather?.current?.feelslike,
    uv: weather?.current?.uv_index,
    visibility: weather?.current?.visibility,
    pressure: weather?.current?.pressure,
    cloudcover: weather?.current?.cloudcover,
    precip: weather?.current?.precip,
    dewpoint: weather?.current?.dewpoint,
    time: weather?.location?.localtime,
  }
  const currentTime = update?.time?.split(" ")[1]
  /*useEffect(() => {
     country.push(weather?.location?.country)
     city.push(weather?.location?.name)
     desc.push(weather?.current?.weather_descriptions[0])
     temp.push(weather?.current?.temperature)
     feelslike.push(weather?.current?.feelslike)
     
  }, [weather, city, country, desc, feelslike, temp])
  console.log(weather)*/
  return (
    <>
      <timeContext.Provider value={{ now, location, setLocation, weather, update, month, day, year, currentTime }}>
        <div className='bg-black m-0 p-0 pb-5 overflow-hidden'>
          <div className='bg-black bg-opacity-80 text-white p-4 flex justify-between items-center relative'>
            <Navbar />
            <Search />
          </div>
          <div className='flex justify-center items-center gap-6'>
            <div className='flex flex-col justify-evenly items-center gap-6'>
              <WeatherToday />
              <OtherCountries />
            </div>
            <div className='flex flex-col justify-evenly items-center gap-2'>
              <Highlight />
              <Forecast />
            </div>
          </div>
        </div>
      </timeContext.Provider>
    </>
  )
}

export default App
