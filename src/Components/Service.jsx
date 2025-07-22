import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Service = () => {
 const navigate =  useNavigate()
  const NavigateHandler = () =>{
    navigate("/service/detail")
  }
  return (
    <div>
      <h1 className='text-white text-5xl' > Service</h1>
      <button onClick={NavigateHandler} className='bg-white text-black px-4 py-2 rounded-2xl  mt-5'>Details</button>
      <hr className='my-10' />
      <Outlet />

    </div>
  )
}

export default Service