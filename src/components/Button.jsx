import React from 'react'

const Button = ({children, outline, className, ...rest}) => {
  return (
    <button {...rest} className={`cursor-pointer md:h-12 h-9 py-1 px-3 md:px-5 text-sm md:text-base  rounded-md ${className} ${outline && "bg-white border border-1 border-gray-100"}`}>{children}</button>
  )
}

export default Button