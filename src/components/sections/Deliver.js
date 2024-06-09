import { homeDeliverContents } from "../../data/data";
import { useState } from "react";
import Heading from "../Heading";
import SubHeading from "../SubHeading";
import TextBody from "../TextBody";

const Deliver = () => {

    const [cardClick, setCardClick] = useState(false)

    return ( 
        <div className="deliver px-4 py-16 flex flex-col items-center text-center">
            <div className="headText w-3/4 flex flex-col">
                <SubHeading text={homeDeliverContents.subHeadline} />
                <Heading text={homeDeliverContents.headline} fontSize={'text-3xl'} />
            </div>
            {
                homeDeliverContents.timeRoutes.map((timeRoute, idx)=>(
                    <div key={idx} className="deliverRouteContainer my-4 flex flex-col justify-center items-center">
                        <div onMouseEnter={()=> setCardClick(true)} onMouseLeave={()=> setCardClick(false)} className={`image_container relative h-24 w-24  border rounded-full border-red-500 flex justify-center items-center transition-colors duration-500 ${cardClick ? 'bg-red-500' : ''} `}>
                            <img src={timeRoute.logo_img} className={`${cardClick ? 'text-white' : 'text-red-500'}`} alt="" />
                            <span className={`absolute top-[50px] left-[75px] h-10 w-10 border rounded-full  text-white font-bold flex justify-center items-center transition-colors duration-500 ${cardClick ? 'bg-black border-black' : 'bg-red-500 border-red-500'}`}>0{idx+1}</span>
                        </div>
                        <Heading text={timeRoute.headline} fontSize={'text-xl'} my={'mt-4 mb-2'} />
                        <TextBody text={timeRoute.body} my={'my-2'} />
                    </div>
                    
                ))
            }

        </div>
     );
}
 
export default Deliver;