import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-[var(--primary-color)]'>
      <div className='max-w-[1200px] flex mx-auto px-8 flex-col justify-center h-full'>
        <p className='text-[var(--text-primary)]'>Hi, my name is </p>
        <h1 className='text-5xl sm:text-7xl font-bold text-[var(--text-accent)] animate-[fade-in-up_1.5s]'>Lisa Pearson.</h1>
        {/* <h2 className='text-3xl sm:text-5xl font-regular text-[#f3b6b3]'>I am a Web Developer.</h2> */}
        <p className='py-4 max-w-[300] text-[var(--text-primary)]'> I am a designer with several years of experience and a broad background covering web, UX, and graphic design.</p>
        <div>
          <button className='text-[var(--text-primary)] border-2 border-[var(--secondary-color)] rounded-full px-6 py-3 my-2 flex items-center hover:bg-[#103463] hover:text-white'> View Work <HiArrowNarrowRight /></button>
        </div>
      </div>

    </div>
  )
}

export default Hero