import React, { use } from 'react'
import { useContext } from 'react'
import { timeContext } from '../context/time'

const Highlight = () => {
    const update = useContext(timeContext).update
    const currentTime = useContext(timeContext).currentTime
    const getCurrentTimeFormatted = () => {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0'); // Ensure two digits
        const period = hours >= 12 ? 'PM' : 'AM';
      
        // Convert hours from 24-hour to 12-hour format
        hours = hours % 12 || 12; // '0' should be converted to '12'
      
        return `${hours}:${minutes} ${period}`;
      }


    return (
        <div className='h-[350px] w-[750px] bg-[#0F0F0F] p-4 rounded-3xl'>
            <div className='text-3xl text-yellow-50 font-medium ml-8'>Today's Highlight</div>
            <div className="flex justify-center items-center gap-3 mt-3">
                <div className="flex flex-col justify-center items-center gap-3">
                    <div className="flex justify-center items-center gap-3">
                        <div className='h-32 w-32 flex flex-col justify-between items-center p-2 rounded-3xl bg-black'>
                            <h1 className='text-white text-base'>Wind Status</h1>
                            <h1 className='text-white text-xl flex gap-1 relative bottom-3 mr-0 pr-0'><div className='absolute right-2'>{update.wind}</div> <p className='text-white text-xs absolute top-2'>Km/h</p></h1>
                            <h1 className='text-white text-xl'>{currentTime}</h1>
                        </div>
                        <div className='h-32 w-32 flex flex-col justify-between items-center p-2 rounded-3xl bg-black'>
                        <h1 className='text-white text-base'>Humidity</h1>
                            <h1 className='text-white text-xl flex gap-1 relative bottom-3'><div className='absolute right-2'>{update.humidity}</div> <p className='text-white text-xs absolute top-2'>%</p></h1>
                            <h1 className='text-white text-xl'>{currentTime}</h1>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <div className='h-32 w-32 flex flex-col justify-between items-center p-2 rounded-3xl bg-black'>
                        <h1 className='text-white text-base'>UV Index</h1>
                            <h1 className='text-white text-xl flex gap-1 relative bottom-3'><div className='absolute right-2'>{update.uv}</div> <p className='text-white text-xs absolute top-2'>UV</p></h1>
                            <h1 className='text-white text-xl'>{currentTime}</h1>
                        </div>
                        <div className='h-32 w-32 flex flex-col justify-between items-center p-2 rounded-3xl bg-black'>
                        <h1 className='text-white text-base'>Visibility</h1>
                            <h1 className='text-white text-xl flex gap-1 relative bottom-3'><div className='absolute right-2'>{update.visibility}</div> <p className='text-white text-xs absolute top-2'>Km</p></h1>
                            <h1 className='text-white text-xl'>{currentTime}</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-3">
                    <div className='h-32 w-96 flex flex-col justify-between items-center p-2 rounded-3xl bg-black'></div>
                    <div className='h-32 w-96 flex flex-col justify-between items-center p-2 rounded-3xl bg-black'></div>
                </div>
            </div>
        </div>
    )
}

export default Highlight
