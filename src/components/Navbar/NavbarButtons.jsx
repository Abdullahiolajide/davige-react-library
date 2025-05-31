import React from 'react'

const NavbarButtons = ({children}) => {
  return (
    <div className='flex lg:bg-transparent items-center ml-auto'>
                {children}
    </div>
  )
}

export default NavbarButtons