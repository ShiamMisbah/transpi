import { homeCompetenceContents } from "../../data/data";
import Heading from "../Heading";
import TextBody from "../TextBody";

const Comtepence = () => {
    return ( 
        <div className="competence px-4 py-16 flex flex-col items-center text-left">
            <img src={homeCompetenceContents.sectionImage} alt=""  />
            <Heading text={homeCompetenceContents.headline} />
            <TextBody text={homeCompetenceContents.boyPara} />
            <ul className="serviceBoard w-full bg-red-500  border-[40px] border-red-500 rounded-br-[100px]">
                {
                    homeCompetenceContents.services.map((service, idx)=> (
                        <li key={idx} className="text-lg my-3 font-semibold text-white"><i className="far fa-check-circle mr-4 text-white"></i>{service}</li>
                    ))
                }
            </ul>
        </div>
     );
}
 
export default Comtepence;