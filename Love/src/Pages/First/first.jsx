import React from 'react'
import "./first.css"
import { useNavigate } from 'react-router-dom'

const One = () => {

    const navigate = useNavigate();

    return (
        <div className='first-page flex flex-col'>
            <p className='text-xl font-bold text-pink-700 mx-5 mt-10'>Happy First Meet Anniversary Tanish</p>
            <p className='text-xl font-bold text-red-700 mx-5'>Love You Unlimited Tanish</p>
            <p className='text-base  text-orange-500 mb-5 mx-3 mt-40'>1 जून 2024... एक साधारण दिन था, लेकिन रजनीश के लिए बेहद ख़ास बनने वाला था।
                उस दिन वह अपने मंघर (ननिहाल) गया था। दिल में एक हलचल थी, पर वजह साफ़ नहीं थी — शायद किसी से मिलने की आस थी।

                जैसे ही रजनीश वहाँ पहुँचा, उसका दिल बस एक ही नाम पुकार रहा था – तनु।
                भीड़ में सबसे पहले उसने उसी को ढूँढा। और जब नज़रें मिलीं, तो वक़्त जैसे कुछ पल के लिए रुक गया।

                दिन की शुरुआत क्रिकेट से हुई। रजनीश और तनु ने साथ में खेला, हँसे, और फिर लूडो में एक-दूसरे की चालों से मज़ा लिया। यह खेल नहीं, एक रिश्ते की नींव थी — जिसमें मासूमियत थी, मस्ती थी, और धीरे-धीरे पनपता हुआ प्यार था।

                शाम होते-होते रजनीश के मन में तनु के लिए कुछ खास भावनाएं बनने लगी थीं। उसी भावना को शब्द देने के लिए उसने तनु पर एक निबंध (essay) लिखा — अपने मन के भाव काग़ज़ पर उकेरे।

                और फिर, उसने उसे एक नाम दिया – "शालेन्द्र"।
                शायद यह नाम उस गहराई का प्रतीक था, जो उसके मन में तनु के लिए जन्म ले चुकी थी।

                यही वह दिन था — जहाँ से रजनीश और तनु की लव स्टोरी की शुरुआत हुई।

            </p>
            <button className='bg-sky-200 text-sky-600 text-2xl rounded rounded-full mx-20 py-2 fixed bottom-10 items-center w-60' onClick={() => navigate("/second")}>Next Page</button>

        </div>
    )
}

export default One