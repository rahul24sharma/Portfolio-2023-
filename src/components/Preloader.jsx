import React from 'react'
import { Audio } from 'react-loader-spinner'


const Preloader = () => {
  return (
    <div className="loadermain">
    <Audio
      height="80"
      width="80"
      radius="9"
      color="white"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  </div>
  )
}

export default Preloader
