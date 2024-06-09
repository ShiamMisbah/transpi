import Slider from "react-slick";
import { homeServicesContents } from "../../data/data";
import ServiceCard from "../service_card";


const Services = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      };

    return ( 
        <div className="services w-full bg-gray-100 py-16 px-4">
            <div className="text-container">
                <div className="subheading text-red-500 font-semibold my-4">{homeServicesContents.subHeadline}</div>
                <div className="heading text-4xl font-bold my-4 mb-6">{homeServicesContents.headline}</div>
            </div>
            <Slider {...settings}>
                {homeServicesContents.carousalCards.map((homeServiceCarousalContent, idx)=>(
                    <ServiceCard key={idx} homeServiceCarousalContent={homeServiceCarousalContent} />
                ))}
            </Slider>
        </div>
     );
}
 
export default Services;