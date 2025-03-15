import React from 'react'
import { useContext } from 'react'
import { useForm } from "react-hook-form"
import { timeContext } from '../context/time'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    const location = useContext(timeContext).location
    const setLocation = useContext(timeContext).setLocation
  

   

    const handleInputChange = (event) => {
        let newloc = event.target.value
        setLocation(newloc) // Update the state with user input
    }

   

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = newdata => console.log(newdata)

    return (
        <div>
            
            <form onSubmit={handleSubmit(onSubmit)} className='relative pr-5'>
                {/* register your input into the hook by invoking the "register" function */}
                <FontAwesomeIcon icon={faMagnifyingGlassLocation} className='transform absolute z-10 right-[345px] top-5 h-5 text-white opacity-60' />
                <input placeholder='Search your location' type='text' {...register("location", { required: { value: true, message: "Enter location" } })} onChange={handleInputChange} className='bg-[#0F0F0F] h-14 w-96 rounded-3xl outline-none pl-11 absolute z-0 right-0' />
                
            </form>
            
        </div>
    )
}

export default Search
