import React from 'react'
import Typed from 'react-typed'
function Hero() {
  return (
    <div className='text-white '>
        <div className='max-w-[800ox] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold pt-[100px]'>GROWING DATA WITH DATA ANALYTICS</p>
            <h1  className='md:text-7xl py-6 sm:text-6xl text-4xl pt-25 font-bold'>Grow with data.</h1>
            <div className='flex justify-center items-center'>
                <p  className='md:text 5xl sm:text-4xl text-xl font-bold'>Fast,flexible financing for</p>
                <Typed className='md:text 5xl sm:text-4xl text-xl font-bold pl-2' strings={['BTB','BTC','SAAS']} typeSpeed={120} backSpeed={140}  loop/>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 pt-7'>Monitor your data analytics to increase revenue for BTC , BTC & SAAS platforms</p>
            <button className='p-8 bg-[#00df9a] w-[200px] h-[48px] text-black rounded-md font-medium my-6 mx-auto py-3'>Get started</button>
        </div>
    </div>
  )
}

export default Hero
