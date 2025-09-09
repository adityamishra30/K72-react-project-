import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
      <p className='absolute lg:w-[17vw] w-64 lg:right-20 right-0 bottom-28  lg:bottom-72 font-[font1] lg:text-lg text-xs lg:leading-relaxed leading-tight'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 is an agency that carefully thinks through every action to nourish the brand. Tomorrow, in 5 months, and in 5 years. We look for the friction that sparks emotion. To build an honest relationship, we are unfiltered; we say what needs to be said, and we do what needs to be done.</p>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase'>
        <Link className='text-[6vw] lg:mt-6' to='/Projects'>Projects</Link>
      </div>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]  lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase'>
        <Link className='text-[6vw] lg:mt-6' to='/Agence'>Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText