
import Comtepence from "../components/sections/Competence";
import Deliver from "../components/sections/Deliver";
import FrameSlider from "../components/sections/FrameSlider";
import Services from "../components/sections/Services";
import AboutUs from "../components/sections/aboutUs";


const Home = () => {



    return ( 
        <div className="home w-full">
            <FrameSlider />
            <AboutUs />
            <Services />
            <Deliver />
            <Comtepence />
            
        </div>
     );
}
 
export default Home;