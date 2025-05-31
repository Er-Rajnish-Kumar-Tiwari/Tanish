import React from 'react'
import "./nine.css";
import { useNavigate } from 'react-router-dom';

const Nine = () => {

    const navigate = useNavigate();

    return (
        <div className='nine-page flex flex-col'>
            <p className='text-2xl font-bold text-red-700 mx-5 mb-5 mt-5'>Love You Unlimited Mere Dhan-Ji</p>
            <p className='text-base font-semibold text-gray-900 mb-20 mx-5 '>2 दिसम्बर 2024 —
                आज था रजनीश का जन्मदिन, और इस बार का जन्मदिन
                कुछ खास, कुछ दिल के बेहद करीब था।

                जैसे ही घड़ी ने रात के 12:00 बजाए,
                तनु ने सबसे पहले
                वीडियो कॉल किया 🎥
                और बहुत ही प्यारे अंदाज़ में बोली —

                "हैप्पी बर्थडे, मेरा जिराफ़!" 💖

                और फिर…
                💋 एक प्यारा सा किस दिया
                🗣️ ढेर सारी प्यारी-प्यारी बातें कीं
                😄 और रजनीश को हँसाती रहीं,
                जैसे वो चाहती हों कि
                इस दिन रजनीश के चेहरे पर बस मुस्कान ही मुस्कान रहे।

                उस रात रजनीश ने महसूस किया कि —
                🎁 इससे अच्छा बर्थडे गिफ्ट कभी नहीं मिला।
                ना कोई महंगी चीज़, ना कोई बड़ा सरप्राइज़…
                बस तनु का साथ, प्यार और वो रात 12 बजे की विश,
                जिसने पूरा दिन खुशियों से भर दिया।

            </p>
            <button className='bg-pink-200 text-sky-600 text-2xl rounded rounded-full mx-20 py-2 fixed bottom-10 items-center w-60' onClick={() => navigate("/ten")}>Next Page</button>
        </div>
    )
}

export default Nine