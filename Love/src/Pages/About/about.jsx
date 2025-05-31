import React from 'react'
import "./about.css";
import { useNavigate } from 'react-router-dom';

const About = () => {

    const navigate=useNavigate();

  return (
    <div className='about-page flex flex-col'>
        <p className='text-5xl font-semibold text-red-900 mb-5'>Hello Tanish</p>
        <p className='text-3xl font-semibold text-red-700 mb-5'>Love You Unlimited Mrs-Ji</p>
        <p className='text-xl font-semibold text-sky-900 mb-10' >Happy First Meet Anniversary Mrs-Ji</p>
        <p className='text-wrap font-semibold text-base text-yellow-600 mb-10'>"आज तनीश की लव स्टोरी के एक साल पूरे हो गए हैं। और तनीश की लव स्टोरी के इस एक साल में क्या-क्या हुआ, यह जानने के लिए नीचे दिए गए बटन पर क्लिक करें।"</p>
        <button className='bg-white text-sky-600 text-2xl rounded rounded-full mx-20 py-2' onClick={()=>navigate("/first")}>Click Here</button>
        
    </div>
  )
}

export default About