import React from 'react'

const Forecast = () => {
    return (
        <div className='h-60 w-[750px] bg-[#0F0F0F] p-4 rounded-3xl'>
            <div className='text-3xl text-yellow-50 font-medium'>10 Day Forecast</div>
            <div className='flex justify-evenly items-center overflow-auto hide-scrollbar gap-2 mt-3'>
                <div className='bg-[#1E1E1E] p-0 flex flex-col justify-between items-center py-2 min-h-40 min-w-32 rounded-2xl'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-white text-2xl font-semibold'>Mon</div>
                        <div className='h-1 w-24 bg-black bg-gradient-radial from-white via-white/30 to-white/5'></div>
                    </div>
                    <div className='text-white text-2xl font-semibold'>25°C</div>
                    <div className='text-white text-xl font-normal'>Clear</div>
                </div>
                <div className='bg-[#1E1E1E] p-0 flex flex-col justify-between items-center py-2 min-h-40 min-w-32 rounded-2xl'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-white text-2xl font-semibold'>Tue</div>
                        <div className='h-1 w-24 bg-black bg-gradient-radial from-white via-white/30 to-white/5'></div>
                    </div>
                    <div className='text-white text-2xl font-semibold'>25°C</div>
                    <div className='text-white text-xl font-normal'>Clear</div>
                </div>
                <div className='bg-[#1E1E1E] p-0 flex flex-col justify-between items-center py-2 min-h-40 min-w-32 rounded-2xl'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-white text-2xl font-semibold'>Wed</div>
                        <div className='h-1 w-24 bg-black bg-gradient-radial from-white via-white/30 to-white/5'></div>
                    </div>
                    <div className='text-white text-2xl font-semibold'>25°C</div>
                    <div className='text-white text-xl font-normal'>Clear</div>
                </div>
                <div className='bg-[#1E1E1E] p-0 flex flex-col justify-between items-center py-2 min-h-40 min-w-32 rounded-2xl'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-white text-2xl font-semibold'>Thu</div>
                        <div className='h-1 w-24 bg-black bg-gradient-radial from-white via-white/30 to-white/5'></div>
                    </div>
                    <div className='text-white text-2xl font-semibold'>25°C</div>
                    <div className='text-white text-xl font-normal'>Clear</div>
                </div>
                <div className='bg-[#1E1E1E] p-0 flex flex-col justify-between items-center py-2 min-h-40 min-w-32 rounded-2xl'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-white text-2xl font-semibold'>Fri</div>
                        <div className='h-1 w-24 bg-black bg-gradient-radial from-white via-white/30 to-white/5'></div>
                    </div>
                    <div className='text-white text-2xl font-semibold'>25°C</div>
                    <div className='text-white text-xl font-normal'>Clear</div>
                </div>
                <div className='bg-[#1E1E1E] p-0 flex flex-col justify-between items-center py-2 min-h-40 min-w-32 rounded-2xl'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-white text-2xl font-semibold'>Sat</div>
                        <div className='h-1 w-24 bg-black bg-gradient-radial from-white via-white/30 to-white/5'></div>
                    </div>
                    <div className='text-white text-2xl font-semibold'>25°C</div>
                    <div className='text-white text-xl font-normal'>Clear</div>
                </div>
            </div>
        </div>
    )
}

export default Forecast
