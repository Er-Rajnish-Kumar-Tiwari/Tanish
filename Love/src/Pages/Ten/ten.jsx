import React from 'react'
import "./ten.css";
import { useNavigate } from 'react-router-dom';

const Ten = () => {

    const navigate = useNavigate();

    return (
        <div className='ten-page flex flex-col'>
            <p className='text-2xl font-bold text-red-700 mx-5 mb-5 mt-5'>Ye Hamar Kareja I Love You Unlimited Ho</p>
            <p className='text-base font-semibold text-gray-900 mb-20 mx-5 '>1 जनवरी 2025 —
                सिर्फ नया साल नहीं था,
                बल्कि रजनीश और तनु की मोहब्बत की एक नई सुबह थी।

                जैसे ही घड़ी ने रात के 12:00 बजाए,
                दोनों ने सबसे पहले
                🌟 एक-दूसरे को न्यू ईयर विश किया।

                💬 फिर शुरू हुई वो प्यारी सी बातें,
                जो दिल को छू जाएं…
                हँसी, मस्ती, प्यार —
                हर लफ्ज़ में बस एक ही चीज़ थी —
                "हम एक-दूसरे के लिए ही बने हैं"।

                🌹 इस नए साल पर,
                दोनों ने एक-दूसरे से वादा किया:

                "हम हमेशा साथ रहेंगे,
                एक-दूसरे का साथ कभी नहीं छोड़ेंगे,
                चाहे हालात जैसे भी हों।"

                🙏 फिर दोनों ने मिलकर भोले बाबा से प्रार्थना की —
                कि इस साल हमारे जीवन में
                🎁 खुशियाँ आएं, प्यार और गहराए,
                और हमारा रिश्ता
                हर तूफ़ान में भी मजबूती से खड़ा रहे।

            </p>
            <button className='bg-pink-200 text-sky-600 text-2xl rounded rounded-full mx-20 py-2 fixed bottom-10 items-center w-60' onClick={() => navigate("/eleven")}>Next Page</button>
        </div>
    )
}

export default Ten