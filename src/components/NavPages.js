import { navPages } from "../data/data";
import NavListGenerator from "../components/NavListGenerator";
const NavPages = () => {


    return ( 
        <div className="container px-2 bg-white">
            <ul>
                {navPages.map((navPage) => (
                    <div key={navPage.id} className="px-2">
                        <NavListGenerator navPage={navPage}/>
                        <hr />
                        {navPage.hasChild && <ul className=" hidden scale-0 " >
                            {navPage.subPages.map((subPage)=> (
                                <div key={subPage.id} className="px-2">
                                    <NavListGenerator navPage={subPage}/>
                                    <hr />
                                </div>
                            ))}
                        </ul>}
                    </div>
                ))}
            </ul>
        </div>
     );
}
 
export default NavPages;