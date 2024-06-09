import { useState } from "react";
import { Link } from "react-router-dom";


const ServiceCard = ({homeServiceCarousalContent}) => {

    const [cardClick, setCardClick] = useState(false)


    return ( 
        <div  className="service_card w-full relative h-[500px] bg-white flex flex-col">
            <div style={{overflow: 'hidden'}} className={`img_container h-full relative`}>
                <img className={`w-full h-full object-fill transition-transform duration-500 ${cardClick ? 'scale-125' : 'scale-100'}`} src={homeServiceCarousalContent.service_img} alt=""  />
            </div>
            <div onMouseEnter={() => setCardClick(true)} onMouseLeave={() => setCardClick(false)} className={`absolute flex justify-center items-center border-white border-4 rounded-full top-1/2 right-8 -translate-y-1/2 logo w-[90px] h-[90px] transition-colors duration-500 ${cardClick ? 'bg-black' : 'bg-red-500'}`}>
                <img src={homeServiceCarousalContent.logo_img} alt="" />
            </div>
            <div className="text_container grow p-8 h-full">
                <div className="heading text-2xl font-bold my-3">{homeServiceCarousalContent.headline}</div>
                <div className="bodyPara w-full leading-7 text-lg text-gray-500">{homeServiceCarousalContent.body}</div>
                <button className="my-5 text-lg font-semibold">
                    <Link to={homeServiceCarousalContent.url}>Read More</Link>
                </button>
                
            </div>
        </div>
     );
}
 
export default ServiceCard;