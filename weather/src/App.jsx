import { useState } from 'react'
import { timeContext } from './context/time'
import Navbar from './components/Navbar';
import Weather from './components/Weather';
import OtherCountries from './components/OtherCountries';
import Highlight from './components/Highlight';
import Forecast from './components/Forecast';

function App() {
  const [count, setCount] = useState(0)
  let [location, setLocation] = useState('New York')
  const now = new Date();

  return (
    <>
      <timeContext.Provider value={{ now, count, setCount, location, setLocation }}>
        <body className='bg-black m-0 p-7'>
          <Navbar />
          <div className='flex justify-center items-center gap-6'>
            <div className='flex flex-col justify-evenly items-center gap-6'>
              <Weather />
              <OtherCountries />
            </div>
            <div className='flex flex-col justify-evenly items-center gap-6'>
              <Highlight />
              <Forecast />
            </div>
          </div>
        </body>
      </timeContext.Provider>
    </>
  )
}

export default App
