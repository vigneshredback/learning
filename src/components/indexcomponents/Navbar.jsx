import React from 'react'
import { IoMenu } from "react-icons/io5";

function Navbar() {
  return (
    <>
      <nav className='flex justify-between items-center px-5 py-3 bg-[lightpink]'>

        <h1 className='text-3xl font-bold'>Irfan portfolio</h1>
 
        <div className='hidden md:block'>
          <a className='ms-5' href="">home</a>
          <a className='ms-5' href="">about</a>
          <a className='ms-5' href="">contact</a>
          <a className='ms-5' href="">services</a>
        </div>

      <IoMenu className=' md:hidden text-3xl'/>
      </nav>
      <div className=' md:hidden fixed right-0  h-[100vh] bg-[lightpink] w-[50vw] flex flex-col justify-start items-center'>
          <a className=' mt-8 border-2' href="">home</a>
          <a className=' mt-8 border-2' href="">about</a>
          <a className=' mt-8 border-2' href="">contact</a>
          <a className=' mt-8 border-2' href="">services</a>
        </div>
    </>
  )
}

export default Navbar