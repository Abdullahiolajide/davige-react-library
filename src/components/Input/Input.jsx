import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'

const Input = () => {
  return (
    <div>
         <div className=' nav-input flex md:py-2 py-1 px-2 md:px-3 md:px-5 text-sm bg-white/30 backdrop-blur-lg      rounded-md border border-2 border-gray-100 w-fit flex justify-between' >
            <input type="text" placeholder='Search Destination...' className='focus:outline-0' />
                              <IoSearchSharp />
        </div>
    </div>
  )
}

export default Input