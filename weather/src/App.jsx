import { useState, useCallback, useRef } from 'react'
import { timeContext } from './context/time'
import Navbar from './components/Navbar';
import WeatherToday from './components/WeatherToday';
import OtherCountries from './components/OtherCountries';
import Highlight from './components/Highlight';
import Forecast from './components/Forecast';

function App() {
  const [count, setCount] = useState(0)
  let [location, setLocation] = useState('New Delhi')
  
  const now = new Date();

  
      const [weather, setWeather] = useState({})
       
  return (
    <>
      <timeContext.Provider value={{ now, count, setCount, location, setLocation, weather, setWeather }}>
        <div className='bg-black m-0 p-7'>
          <Navbar />
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
