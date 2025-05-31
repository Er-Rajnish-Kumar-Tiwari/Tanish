import React from 'react'
import "./five.css";
import { useNavigate } from 'react-router-dom';

const Five = () => {

    const navigate = useNavigate();

    return (

        <div className='five-page flex flex-col'>
            <p className='text-2xl font-bold text-pink-500 mx-5 mb-5 mt-5'>Love You Unlimited Mere Paglu</p>
            <p className='text-base font-semibold text-slate-900 mb-20 mx-5 '>12 जुलाई 2024 — वो दिन जब रजनीश ने अपना दिल खोलकर रख दिया…

                सुबह का वक़्त था, दिल में बहुत डर और घबराहट थी।
                रजनीश कई बार सोच चुका था कि कैसे कहे…
                फिर आखिरकार, हिम्मत को थामकर, उसने तनु से कहा:

                “वीडियो कॉल करो… कुछ बहुत ज़रूरी बात करनी है।”

                तनु ने कॉल किया।
                रजनीश काँपती आवाज़ में बोला:

                “क्या आप मेरी गर्लफ्रेंड बनेंगी?”

                तनु ने जवाब दिया —
                “बाय।”

                रजनीश का दिल एक पल को रुक गया।
                वो डर गया… बहुत ज़्यादा।

                लेकिन कुछ मिनटों बाद…

                तनु ने खुद पूछा —
                “क्या आप मेरे बॉयफ्रेंड बनेंगे?”

                रजनीश ने मुस्कराते हुए कहा —
                “हाँ।”

                और तनु ने भी कहा —
                “हाँ।”

                💖 और बस वहीं से दो दिलों की धड़कनें एक हो गईं…

                उस वक़्त घड़ी में 9:30 AM हो रहे थे,
                और तनु ने पीली टी-शर्ट (Yellow T-shirt) पहनी हुई थी —
                जिसमें वो रजनीश को और भी ज़्यादा प्यारी लगी।

                उसके बाद दोनों ने खूब सारी बातें कीं —
                जैसे अब कोई बंदिश न हो,
                जैसे अब दिल खुलकर बह सकता हो।

                वो दिन सिर्फ एक दिन नहीं था…
                वो दिन था जब प्यार को "हाँ" मिली थी।</p>
            <button className='bg-pink-200 text-sky-600 text-2xl rounded rounded-full mx-20 py-2 fixed bottom-10 items-center w-60' onClick={() => navigate("/six")}>Next Page</button>
        </div>
    )
}

export default Five