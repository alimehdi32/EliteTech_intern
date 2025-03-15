import React, { useContext, useMemo } from 'react'
import { timeContext } from '../context/time'
import Search from './Search';

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
     
    </div>
  )
}

export default Navbar
