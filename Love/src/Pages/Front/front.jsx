import React from 'react'
import "./front.css";
import { useNavigate } from 'react-router-dom';

const Front = () => {

    const navigate=useNavigate();

  return (
    <div className='front-page'>

        <button className='text-2xl fixed top-80 h-12  px-5  bg-sky-300 text-pink-500 rounded rounded-full outline-none ' onClick={()=>navigate("/about")}>Click Here</button>
    </div>
  )
}

export default Front