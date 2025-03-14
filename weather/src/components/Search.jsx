import React from 'react'
import { useContext, useCallback, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { timeContext } from '../context/time'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    const location = useContext(timeContext).location
    const setLocation = useContext(timeContext).setLocation
    const setWeather = useContext(timeContext).setWeather

    // Define the fetch function using useCallback
    const fetchWeather = useCallback(async () => {
        const url = `https://api.weatherstack.com/current?access_key=884859127838418fa3e1def6d3d726d7&query=${location}`;
        const options = {
            method: "GET",
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setWeather(result);
        } catch (error) {
            console.error(error);
        }
    }, [location, setWeather]);

    // Automatically fetch weather when the component mounts
    useEffect(() => {
        fetchWeather();
    }, [fetchWeather]);


    const handleInputChange = (event) => {
        let newloc = event.target.value
        setLocation(newloc) // Update the state with user input
    }

    const handleFormSubmit = (event) => { // Handle form submission
        event.preventDefault(); // Prevent the default form submission behavior (refreshing the page)
        console.log(location); // Log the user input
        fetchWeather(location)
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = newdata => console.log(newdata)
    const watchLocation = watch("location") // you can supply default value as second argument

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='relative pr-5'>
                {/* register your input into the hook by invoking the "register" function */}
                <FontAwesomeIcon icon={faMagnifyingGlassLocation} className='transform absolute z-10 right-[365px] top-5 h-5 text-white opacity-60' />
                <input placeholder='Search your location' type='text' {...register("location", { required: { value: true, message: "Enter location" } })} onChange={handleInputChange} className='bg-[#0F0F0F] h-14 w-60 rounded-l-3xl outline-none pl-11 absolute z-0 right-40' />
                <button type="submit" onClick={handleFormSubmit} className='bg-[#0F0F0F] h-14 w-[144px] rounded-r-3xl'><p className='bg-[#0F0F0F] hover:font-bold hover:text-zinc-700 rounded-r-3xl'>Get Weather</p></button>

            </form>
        </div>
    )
}

export default Search
