import React, { useContext } from 'react'
import { timeContext } from '../context/time'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const OtherCountries = () => {
   
    return (

        <div className='h-[318px] w-[650px] bg-[#0F0F0F] p-4 rounded-3xl'>
            <div className="flex justify-between items-center">
                <div className='text-3xl text-yellow-50 font-medium'>Other Countries</div>
                <button >
                    <FontAwesomeIcon icon={faPlus} className='text-white text-2xl' />
                </button>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 mt-3">
            <div className='h-32 w-[600px] flex justify-between items-center p-2 rounded-3xl bg-black relative'>
            <div className="flex flex-col justify-around items-center h-28 w-24">
                <div className='text-white text-sm m-0'>{}</div>
                <div className='text-white text-xl font-semibold ml-5'>{}</div>
                <div className='text-white text-sm ml-5'>{}</div>
            </div>
            <div className='text-white text-2xl font-semibold absolute top-[52px] left-[500px]'>{}°C/</div><div className='absolute text-white top-[57px] left-[545px] text-xl'>{}°C</div>
        </div>

            </div>
        </div>
    )
}

export default OtherCountries
