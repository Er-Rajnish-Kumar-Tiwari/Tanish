import React from 'react'
import "./seven.css";
import { useNavigate } from 'react-router-dom';

const Seven = () => {

    const navigate=useNavigate();

    return (

        <div className='seven-page flex flex-col'>
            <p className='text-2xl font-bold text-red-700 mx-5 mb-5 mt-5'>Love You Unlimited Mere Life Line</p>
            <p className='text-base  text-white mb-20 mx-5 '>11 नवम्बर 2024 —
                आज का दिन था बहुत ही खास…
                क्योंकि आज रजनीश और तनु पहली बार
                सबसे छुपकर, चुपचाप, सिर्फ अपने लिए मिले।

                जब दोनों की नज़रें एक-दूसरे पर पड़ीं,
                तो जैसे पूरी दुनिया रुक गई हो,
                तनु की आँखें रजनीश की आँखों में खो गईं…
                और रजनीश बस उसे निहारता रहा।

                दोनों के दिल में थोड़ा डर भी था,
                कि कहीं कोई देख न ले…
                पर उस एक पल की ख़ुशी,
                हर डर से कई गुना ज़्यादा थी।

                फिर तनु आई और रजनीश की बाइक पर बैठ गई,
                और कस के उसे पकड़ लिया —
                जैसे कभी न छोड़ने का वादा हो।

                इस मुलाक़ात में बहुत कुछ हुआ…
                💞 दोनों ने पहली बार एक-दूसरे को गले लगाया
                💋 और पहली बार एक प्यारी सी किस भी हुई
                👀 एक-दूसरे की आँखों में देखा, और
                💍 दिल से दिल को प्रपोज किया।

                फिर रजनीश ने तनु को
                एक खास ब्रासलेट पहनाया —
                जो अब सिर्फ एक गहना नहीं था,
                बल्कि प्यार की एक मूक निशानी बन गया।

                उसके बाद दोनों ने बहुत सारी बातें कीं,
                एक-दूसरे के और करीब आ गए…
                फिर वो पल भी आया, जब
                दोनों ने अलविदा कहा और अपने-अपने घर चले गए —
                पर दिलों में वही एक मुलाक़ात बस गई…
                हमेशा के लिए।</p>
            <button className='bg-pink-200 text-sky-600 text-2xl rounded rounded-full mx-20 py-2 fixed bottom-10 items-center w-60' onClick={() => navigate("/eight")}>Next Page</button>
        </div>

    )
}

export default Seven