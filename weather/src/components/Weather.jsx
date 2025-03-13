import React, { useContext } from 'react'
import { timeContext } from '../context/time'

const Weather = () => {
  const location = useContext(timeContext).location;
  let key = "4e1d5c01b2cd82af6dd3900539b5624f"
  let data = async () => {

    const url = 'https://api.weatherstack.com/current?access_key={286888787e7a215e2a06210f46252e0e}&query=New Delhi';
    const options = {
      method: 'GET'
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='h-60 w-[650px] bg-[#0F0F0F] p-4 rounded-3xl'>
      <button onClick={data} className='h-7 w-40 bg-slate-600'>get weather</button>
    </div>
  )
}

export default Weather
