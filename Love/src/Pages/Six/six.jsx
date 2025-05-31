import React from 'react'
import "./six.css";
import { useNavigate } from 'react-router-dom';

const Six = () => {

    const navigate = useNavigate();

    return (
        <div className='six-page flex flex-col'>

            <p className='text-2xl font-bold text-red-700 mx-5 mb-5 mt-5'>Love You Unlimited Mere Life Line</p>
            <p className='text-base font-semibold text-orange-950 mb-20 mx-5 '>22 जुलाई 2024 —
                आज का दिन रजनीश और तनु के लिए सिर्फ एक बात करने का दिन नहीं था,
                बल्कि ज़िंदगी भर का सपना देखने का दिन था।

                रजनीश ने तनु से प्यार भरे शब्दों में पूछा:

                "आप लव मैरिज करेंगी या अरेंज मैरिज?"

                तनु ने बहुत ही प्यारे अंदाज़ में जवाब दिया:

                "लव तो आपसे है, इसलिए लव मैरिज भी आपसे ही करूंगी।" ❤️

                इसके बाद दोनों ने शादी, साथ का जीवन, और बच्चों तक की बातें कीं।
                उन्होंने अपने रिश्ते को एक नया नाम दिया —
                ✨ Tanu + Rajnish = Tanish ✨

                लेकिन बात यहीं नहीं रुकी…

                💫 अगर बेटा हुआ तो उसका नाम होगा – “Tanish”
                💫 और अगर बेटी हुई तो उसका नाम होगा – “Tanishka”

                ये सिर्फ नाम नहीं थे,
                ये थे उनके प्यार की पहचान,
                उनकी लव स्टोरी की आने वाली पीढ़ी,
                और उनके बांधे गए सपनों की सबसे प्यारी शक्ल।

            </p>
            <button className='bg-pink-200 text-sky-600 text-2xl rounded rounded-full mx-20 py-2 fixed bottom-10 items-center w-60' onClick={() => navigate("/seven")}>Next Page</button>
        </div>
    )
}

export default Six