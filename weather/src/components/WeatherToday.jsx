import React from 'react'
import { useContext, useMemo } from 'react'
import { timeContext } from '../context/time'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const WeatherToday = () => {
  const update = useContext(timeContext).update
  const month = useContext(timeContext).month
  const day = useContext(timeContext).day 
  const year = useContext(timeContext).year
  const WeatherDesc = useContext(timeContext).WeatherDesc
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const today = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[today.getDay()];
    
    const image = () => {
   WeatherDesc.map((e) => {
     if(e.type === update.desc){
       update.icon = e.image
     }
   })
   return <img src={update.icon} alt="" className='text-white size-28'/>
  }

  return (
    <div className='h-60 w-[650px] bg-[#0F0F0F] p-4 rounded-3xl relative'>
      <div >
        <p className='h-12 w-96 bg-black bg-opacity-60 flex justify-center items-center text-white gap-3 text-2xl rounded-2xl font-mono'> <FontAwesomeIcon icon={faLocationDot} />{update.exactloc},{update.exactloca}</p>
        <h1 className='text-white text-5xl absolute top-20 left-8'>{dayOfWeek}</h1>
        <h1 className='text-white absolute top-32 left-8'>{day} {months[month-1]},{year}</h1>
      </div>
      <div className='absolute top-24 left-72 size-48'>{image()}</div>
      <div className='text-white text-6xl absolute top-12 left-[500px]'>{update.temp}°C</div>
      
      <div className='absolute top-36 left-[500px]'>
        <h2 className='text-white text-2xl font-semibold max-h-7'>{update.desc}</h2>
        <h2 className='text-white text-xl font-normal'>Feels like {update.feelslike}°C</h2>
      </div>

    </div>
  )
}

export default WeatherToday
