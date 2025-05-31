import React from 'react'
import { Link } from 'react-router-dom'

const NavbarListItem = ({children, screen}) => {
  return (
    <Link to={'#'}><li className={`px-3 ${screen && 'py-2'}`}>{children}</li></Link>
  )
}

export default NavbarListItem