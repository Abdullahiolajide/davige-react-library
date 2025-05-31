import React, { useContext, useState } from 'react'
import NavbarLogo from './NavbarLogo'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchSharp } from 'react-icons/io5'
import { GoX } from "react-icons/go";
import Button from '../Button';
import NavbarButtons from './NavbarButtons';


const NavbarContainer = ({children}) => {
  return (
   
    <section className={`flex  py-2 md:py-2 md:px-6 px-3 justify-between`}>
        {/* <section className={`duration-300 ${show ? '-translate-x-[100%]' : "translate-x-0"}`}> */}
        <div className='flex whitespace-nowrap items-center justify-between w-full'>
            {children}
            </div>
                
            
    </section>
  )
}

export default NavbarContainer