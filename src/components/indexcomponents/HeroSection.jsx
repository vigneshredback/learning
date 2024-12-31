import React from 'react'
import Navbar from './Navbar'

function HeroSection() {
  return (
    <>
        <div className='flex flex-col items-center justify-center bg-slate-400 h-[90vh]'>
            <h1 className='mt-[50px] text-[60px]'>Hi, my name is <i className='text-[orange]'>irfan</i></h1>
            <p className='text-center mt-5 px-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, incidunt delectus. Reiciendis, ipsum iure. A nam neque nihil eos libero aperiam ea officia, exercitationem ab. Excepturi fuga illum eius. Veniam.</p>
        </div>
    </>
  )
}

export default HeroSection