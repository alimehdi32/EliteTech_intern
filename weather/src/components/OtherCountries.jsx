import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const OtherCountries = () => {
    const famousCities = [
        "Tokyo",
        "New York",
        "Paris",
        "London",
        "Dubai",
        "Sydney",
    ];
    const cityDetail =[]
    const weatherDetail = async (city) => {

        const url = `https://api.weatherstack.com/current?access_key=0addbdbcdcebcc314fe58e126b983e33&query=${city}`;
        const options = {
            method: 'GET'
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
            return result
        } catch (error) {
            console.error(error);
        }
    }
    
     famousCities.map((city) => {
        cityDetail.push(weatherDetail(city))

     })
    
    const InfoCard = ({ title1, value, title2, temp1, temp2 }) => (
       
            <div className="h-32 w-[600px] flex justify-between items-center p-2 rounded-3xl bg-black relative">
                <div className="flex flex-col justify-around items-center h-28 w-24">
                    <div className="text-white text-sm m-0">{title1}</div>
                    <div className="text-white text-xl font-semibold ml-5">{value}</div>
                    <div className="text-white text-sm ml-5">{title2}</div>
                </div>
                <div className="text-white text-2xl font-semibold absolute top-[52px] left-[500px]">
                    {temp1}°C/
                </div>
                <div className="absolute text-white top-[57px] left-[545px] text-xl">
                    {temp2}°C
                </div>
            </div>
        
    );





    return (

        <div className='h-[318px] w-[650px] bg-[#0F0F0F] p-4 rounded-3xl relative'>
            <div className="flex justify-between items-center fixed">
                <div className='text-3xl text-yellow-50 font-medium'>Other Countries</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 overflow-auto hide-scrollbar mt-3">
      {cityDetail.map((data, index) => (
        <InfoCard
          key={index}
          title1={data?.location?.country}
          value={data?.location?.name}
          title2={data?.current?.weather_descriptions[0]}
          temp1={data?.current?.temperature}
          temp2={data?.feelslike}
        />
      ))}
    </div>

        </div>
    )
}

export default OtherCountries
