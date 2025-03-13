import React, { useContext, useMemo } from 'react'
import { timeContext } from '../context/time'

const Navbar = () => {
  const now = useContext(timeContext).now;
  const currentHour = now.getHours();
  useMemo(() => { console.log(currentHour) }, [currentHour]);
  const greet = useMemo(() => {
    // Determine the appropriate greeting
    let greeting = '';

    if (currentHour >= 5 && currentHour < 12) {
      greeting = 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = 'Good Afternoon';
    } else if (currentHour >= 18 && currentHour < 22) {
      greeting = 'Good Evening';
    } else {
      greeting = 'Good Night';
    }

    // Output the greeting
    console.log(greeting);
    return greeting;
  }, [currentHour])

  return (
    <div className='bg-black bg-opacity-80 text-white p-4 flex justify-between items-center'>
      <div>
        <div>Hi, Alex</div>
        <div className='text-2xl font-bold'>{greet}</div>
      </div>
      <button className='h-10 w-72 bg-[#0F0F0F] rounded-3xl flex justify-center items-center'>
       <div className='font-thin opacity-20'>search your location</div>
      </button>
    </div>
  )
}

export default Navbar
