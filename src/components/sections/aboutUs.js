
import { homeAboutContents } from '../../data/data';

const AboutUs = () => {
    return ( 
        <div className='aboutUs container py-16 pl-4'>
            <div className="image_container mb-12">
                <img className='my-5 rounded-full' src={homeAboutContents.images[0]}/>
                <img className='my-5 rounded-full' src={homeAboutContents.images[1]}/>
            </div>
            <div className="text_container">
                <div className="subheading text-red-500 font-semibold my-4">{homeAboutContents.subHeadline}</div>
                <div className="heading text-4xl font-bold my-4">{homeAboutContents.headline}</div>
                <div className="bodyPara text-gray-500 my-4">{homeAboutContents.boyPara}</div>
                <ul>
                    {homeAboutContents.services.map((service, idx) => (
                        <li key={idx} className='flex items-center my-2'>
                            <i className="w-2 h-2 block bg-gray-300  rounded-full mr-3"></i>
                            <span>{service}</span>              
                        </li>
                    ))}
                </ul>
            </div>
            <button className="aboutUs_Button border w-40 h-14 text-white font-bold bg-red-500 rounded-md text-md my-3">
                Discover More
            </button>
        </div>
     );
}
 
export default AboutUs;