import React from 'react'
import "./eight.css";
import { useNavigate } from 'react-router-dom';

const Eight = () => {

    const navigate = useNavigate();

    return (
        <div className='eight-page flex flex-col'>
            <p className='text-2xl font-bold text-red-700 mx-5 mb-5 mt-5'>Love You Unlimited Mere Mrs-Ji</p>
            <p className='text-base font-semibold text-gray-900 mb-20 mx-5 '>16 नवम्बर 2024 —
                आज का दिन फिर से वही एहसास लेकर आया…
                जब रजनीश और तनु सबसे छुपकर,
                दूसरी बार एक-दूसरे से मिले।

                जब उनकी नज़रें मिलीं,
                तो फिर से वक़्त थम सा गया…
                तनु की आँखों में वही गहराई थी,
                और रजनीश की आँखों में वही सच्चा प्यार।

                दोनों के मन में थोड़ी घबराहट थी,
                कहीं कोई देख न ले…
                लेकिन मिलन की खुशी हर डर पर भारी थी।

                फिर तनु धीरे से आई और
                रजनीश की बाइक पर बैठ गई,
                और इस बार भी कस के पकड़ लिया —
                जैसे कह रही हो,

                “तुम मेरे हो, और हमेशा रहोगे।”

                🌸 इस बार दोनों ने:

                पहली बार फिर से गले लगाया

                एक प्यारा सा किस किया

                आँखों में आँखें डालकर फिर से प्रपोज़ किया

                और इस बार रजनीश ने तनु को
                प्यार से चॉकलेट भी खिलाई 🍫

                फिर दोनों ने ढेर सारी बातें कीं,
                हँसे, मुस्कुराए, सपने देखे…
                और जब अलविदा कहने का समय आया,
                तो दिल भारी जरूर था,
                लेकिन एक नई याद, एक नया प्यार साथ लेकर
                दोनों अपने-अपने घर चले गए।

            </p>
            <button className='bg-pink-200 text-sky-600 text-2xl rounded rounded-full mx-20 py-2 fixed bottom-10 items-center w-60' onClick={() => navigate("/nine")}>Next Page</button>

        </div>
    )
}

export default Eight