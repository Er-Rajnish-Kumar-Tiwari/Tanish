import React from 'react'
import "./fourth.css";
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Fourth = () => {

    const navigate = useNavigate();

    return (
        <div className='four-page flex flex-col'>

            <p className='text-2xl font-bold text-red-700 mx-5 mb-5 mt-5'>Happy Birthday Bhutu And Love You Unlimited Mere Life Line</p>

            <p className='text-base font-semibold text-slate-900 mb-20 mx-5 '>28 जून 2024 — ये दिन सिर्फ एक तारीख नहीं थी,
                ये दिन था उस इंसान के जन्म का, जिसने रजनीश की ज़िंदगी को सबसे खास बना दिया।

                आज था तनु, यानी रजनीश की 'धन जी' का जन्मदिन।
                सुबह होते ही रजनीश की पहली आवाज़ उसी के लिए निकली —
                उसने तनु को सबसे पहले "हैप्पी बर्थडे" कहा... और वो भी बहुत प्यार से, वीडियो कॉल पर।

                तनु की मुस्कान ने जैसे रजनीश का पूरा दिन रोशन कर दिया।
                उन दोनों के बीच कुछ खास बातें हुईं — कुछ मस्ती, कुछ इमोशन्स, और बहुत सारा प्यार।

                और फिर... आज ही के दिन, रजनीश ने तनु को एक बहुत ही खास नाम दिया —
                💖 "भूतू" 💖
                क्योंकि वो अचानक सामने आकर दिल की धड़कनें बढ़ा देती है...
                कभी डराती है, तो कभी बहुत ज़्यादा प्यारी लगती है।

                वो नाम सिर्फ एक मज़ाक नहीं था — उसमें छुपा था एक गहरा अपनापन,
                एक प्यारा सा रिश्ता, और एक दिल से निकला हुआ एहसास।

                तनु ने भी रजनीश को एक बहुत प्यारा और मजेदार नाम दिया — "जिराफ" 🦒
                शायद क्योंकि वो लंबा है, सीधा-सच्चा है, और सबसे हटकर है।
                या शायद इसलिए कि वो तनु की दुनिया में सबसे ऊपर है —
                बिलकुल जिराफ की तरह, जो सब कुछ ऊँचाई से देखता है, लेकिन दिल से नरम होता है।

                रजनीश और तनु ने उस दिन बहुत सारी बातें कीं —
                उनके बीच की दूरी को उन बातों ने और भी करीब ला दिया।

                आज का दिन उनके रिश्ते में एक नई मिठास और नई गहराई ले आया।</p>
            <button className='bg-sky-200 text-sky-600 text-2xl rounded rounded-full mx-20 py-2 fixed bottom-10 items-center w-60' onClick={() => navigate("/five")}>Next Page</button>

        </div>
    )
}

export default Fourth