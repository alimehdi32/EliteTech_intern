import React from 'react'
import { useContext, useMemo } from 'react'
import { timeContext } from '../context/time'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const WeatherToday = () => {
    
    
    
  return (
    <div className='h-60 w-[650px] bg-[#0F0F0F] p-4 rounded-3xl'>
      <div >
        <p className='h-12 w-64 bg-black bg-opacity-30 flex justify-center items-center text-white gap-3 text-2xl rounded-2xl'> <FontAwesomeIcon icon={faLocationDot} />{}</p>
        <h1>{}</h1>
      </div>
    </div>
  )
}

export default WeatherToday
