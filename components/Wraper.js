import React from 'react'

const Wraper = ({children, className}) => {
  return (
    <div className={`w-full  h-[100%] max-w-[1280] px-5 md:px-8 mx-auto ${className || ""}`}>
        {children}
    </div>
  )
}

export default Wraper