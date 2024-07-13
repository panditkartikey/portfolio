import React from 'react'
import Hero from '../assets/kartikey.jpg';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import About from './About';
const Home = () => {
  return (
    <div name='home' className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className=' flex flex-col justify-center h-full'>
            <h2 className=' text-4xl sm:text-7xl font-bold text-white'>I'm a Frontend Developer</h2>
            <p className=' text-gray-500 py-4 max-w-md'>A frontend developer creates user interfaces for websites using HTML, CSS, and JavaScript, focusing on design, usability, and interactive user experiences.</p>

            <div>
                <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Portfolio 
                   <span className=' group-hover:rotate-90 duration-300'> <MdOutlineKeyboardArrowRight size={25} className=' ml-1'/></span>
                </button>
            </div>
        </div>

        <div>
            <img src={Hero} alt="my profile"  className=' rounded-2xl mx-auto w-2/3 md:w-full'/>
        </div>
      </div>
      <About/>
    </div>
  )
}

export default Home
