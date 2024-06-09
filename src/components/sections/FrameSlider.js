import { useEffect, useState } from "react";
import { homeHeroContents } from "../../data/data";


const FrameSlider = () => {
    const [activeframeNumber ,setActiveFrameNumber] = useState(1);
    const [autoplay, setAutoplay] = useState(true)
    let frameSlideAnimation = null;

    useEffect(()=> {
        frameSlideAnimation = setTimeout(()=> {
            if (activeframeNumber == homeHeroContents.length){setActiveFrameNumber(1)}
            else{
                setActiveFrameNumber(activeframeNumber+1)
            }
        }, 5000)
        return () => clearTimeout(frameSlideAnimation);
    })

    
    const handleAnimation = (e) => {
        setActiveFrameNumber(e);
        console.log(e);
    }

    return ( 
        <div className="heroFrame relative h-[800px]">
            <div style={{backgroundImage: `url(${homeHeroContents[activeframeNumber-1].bgImg})`}} className={`absolute bg-cover bg-center bri h-full w-full transition-all duration-[2000ms]}`}>
                <div className="overlay w-full h-full backdrop-brightness-50">
                    <div className="text_content w-9/12 h-full px-4 py-36 flex flex-col justify-evenly ">
                        <div  className="sub_heading_container relative w-full  h-8">
                        { homeHeroContents.map((homeHeroContent) => (
                            <div key={homeHeroContent.id} className={`sub_heading absolute w-full text-base text-white font-semibold transition duration-[1000ms] ${homeHeroContent.id == activeframeNumber ? 'activeFrame  delay-1000': 'hiddenFrame'} `}>{homeHeroContent.subHeadline.toUpperCase()}</div>
                        )) }
                        </div>
                        <div  className="heading_container relative w-full h-32">
                        { homeHeroContents.map((homeHeroContent) => (
                            <div key={homeHeroContent.id} className={`heading absolute w-full text-3xl  text-white font-bold transition duration-[1000ms] ${homeHeroContent.id == activeframeNumber ? 'activeFrame  delay-1000': 'hiddenFrame'}`}>{homeHeroContent.headline}</div>
                        )) }
                        </div>
                        <div className="bodyPara_container relative w-full  h-40">
                        { homeHeroContents.map((homeHeroContent) => (
                            <div key={homeHeroContent.id} className={`bodyPara absolute w-full text-sm text-white $transition duration-[1000ms] ${homeHeroContent.id == activeframeNumber ? 'activeFrame  delay-1000': 'hiddenFrame'}`}>{homeHeroContent.body}</div>
                        )) }
                        </div>
                        <button className="border w-32 h-11 text-white rounded-md text-sm font-semibold mb-3" >All Services</button>
                        <div className='call_now_container w-full h-16'>
                        { homeHeroContents.map((homeHeroContent) => (
                            <div key={homeHeroContent.id} className={`call_now absolute text-white flex justify-left items-center ${homeHeroContent.id === activeframeNumber ? 'activeFrame': 'hiddenFrame'}`}>
                                <div className="icon bg-red-900  text-white w-12 h-12 flex rounded-full justify-center items-center">
                                    <i className="fa-solid fa-phone-flip"></i>
                                </div>
                                <div className="text ml-3">
                                    <div className="font-semibold">Call Us Now</div>
                                    <div className="text-xl font-bold">+025 757 576 560</div>
                                </div>
                            </div>
                        )) }
                        </div>
                    </div>
                </div>
            </div>
            <ul className="carousal_button text-white absolute 
            bottom-[10%] flex justify-center w-full">
                {
                    homeHeroContents.map((_, idx) => (
                        <i onClick={() => {handleAnimation(idx+1)}} key={idx+1} className={` w-4 h-4 bg-red-900 rounded-full mx-5 transition-all duration-1000
                        ${activeframeNumber == idx+1 ? "activeFrame" : "hiddenFrame"}`}></i>
                    ))
                }
            </ul>
        </div>
     );
}
 
export default FrameSlider;