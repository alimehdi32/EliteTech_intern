import { useState, useCallback, useEffect } from 'react'
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
  const fetchWeather = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.weatherstack.com/current?access_key=28177255c392cf77c8546cb8164443e5&query=40.7831,-73.9712`
      );
      const data = await response.json();
      setWeather(data);
      
    } catch (err) {
     
      console.error(err);
    }
  }, []);
      // Automatically fetch weather when the component mounts
  useEffect(() => {
    fetchWeather(); // Fetch weather data
  }, [fetchWeather]); 
      
     
     let update = {
        exactloc: weather?.location?.name,
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
        time: weather?.current?.observation_time,
      }
       console.log(weather)
  return (
    <>
      <timeContext.Provider value={{ now, location, setLocation, weather, update}}>
        <div className='bg-black m-0 p-7'>
          <div className='bg-black bg-opacity-80 text-white p-4 flex justify-between items-center'>
          <Navbar />
          <Search />
          </div>
          <div className='flex justify-center items-center gap-6'>
            <div className='flex flex-col justify-evenly items-center gap-6'>
              <WeatherToday />
              <OtherCountries />
            </div>
            <div className='flex flex-col justify-evenly items-center gap-6'>
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
