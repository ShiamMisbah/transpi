import { useState } from "react";
import logo from '../../assets/logo.svg'
import Sidebar from "../NavListGenerator";
import { Link } from "react-router-dom";
import NavPages from '../NavPages';

const Navbar = () => {

    const [phoneNumber, setPhoneNumber] = useState('025757576560')
    const [startDay, setStartDay] = useState('Monday')
    const [endDay, setEndDay] = useState('Friday')
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)

    const [search, setSearch] = useState('')
    const handleInput = (e) => {
        setSearch(e.target.value)
    }

    const toggleSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen)
    }

    // const phoneNumberSeperator = (number) => {
    // }

    // phoneNumberSeperator(phoneNumber)



    return ( 
        <div className="container">
            <div className="container p-2.5 text-gray-700">
                <div id="nav_contact" >
                    <div className="contact_phone flex items-center  mb-3">
                        <i className="fa-solid fa-phone-flip text-red-500 mr-2 "></i>
                        <p className="font-semibold" >+{phoneNumber}</p>
                    </div>
                    <div className="contact_time flex items-center mb-5">
                        <i className="fa-regular fa-clock text-red-500 mr-2 "></i>
                        <p className="font-light"> {startDay} to {endDay}: <span className="font-semibold">9:00am - 6:00pm</span> </p>
                    </div>
                </div>
                <div id="nav_links" className="flex items-center justify-left">
                    <div className="nav_career flex items-center  ">
                        <i className=" mr-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 12 10" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M3.0085 1.88418V1.20277C3.00858 0.958753 3.0962 0.722866 3.25545 0.537975C3.41469 0.353084 3.63498 0.23146 3.87628 0.195206L4.58682 0.0886263C5.37448 -0.0295421 6.17537 -0.0295421 6.96303 0.0886263L7.67356 0.195206C7.91487 0.23146 8.13516 0.353084 8.2944 0.537975C8.45364 0.722866 8.54127 0.958753 8.54135 1.20277V1.88418L9.53959 1.96455C9.91099 1.99456 10.2616 2.14822 10.5354 2.40098C10.8091 2.65374 10.9903 2.991 11.0498 3.35883C11.3207 5.03186 11.3207 6.73758 11.0498 8.41061C10.9903 8.77844 10.8091 9.11569 10.5354 9.36845C10.2616 9.62121 9.91099 9.77488 9.53959 9.80489L8.44933 9.89225C6.66928 10.0359 4.88056 10.0359 3.10052 9.89225L2.01026 9.80489C1.63886 9.77488 1.28824 9.62121 1.01447 9.36845C0.740701 9.11569 0.559586 8.77844 0.500083 8.41061C0.229139 6.73758 0.229139 5.03186 0.500083 3.35883C0.559704 2.99111 0.740871 2.65398 1.01463 2.40134C1.28839 2.14869 1.63894 1.99511 2.01026 1.96513L3.0085 1.88418ZM4.71669 0.952333C5.41826 0.847108 6.13159 0.847108 6.83315 0.952333L7.54369 1.05891C7.57816 1.06407 7.60964 1.08143 7.6324 1.10782C7.65517 1.13422 7.6677 1.16791 7.66774 1.20277V1.82303C6.40689 1.75112 5.14296 1.75112 3.88211 1.82303V1.20218C3.88214 1.16733 3.89468 1.13364 3.91744 1.10724C3.94021 1.08084 3.97169 1.06349 4.00616 1.05833L4.71669 0.952333ZM3.17099 2.7473C4.90423 2.60753 6.64562 2.60753 8.37886 2.7473L9.46912 2.83583C9.64579 2.84997 9.81262 2.92295 9.94292 3.04311C10.0732 3.16326 10.1594 3.32365 10.1878 3.49861C10.2239 3.72283 10.2548 3.94706 10.281 4.17303C8.87912 4.86318 7.33746 5.2221 5.77492 5.2221C4.21238 5.2221 2.67072 4.86318 1.26886 4.17303C1.29448 3.94764 1.32593 3.72283 1.36204 3.49861C1.39041 3.32365 1.47664 3.16326 1.60693 3.04311C1.73722 2.92295 1.90405 2.84997 2.08073 2.83583L3.17099 2.7473ZM1.19082 5.10255C2.63043 5.75705 4.19351 6.09569 5.77492 6.09569C7.35634 6.09569 8.91942 5.75705 10.359 5.10255C10.4147 6.16173 10.3573 7.22382 10.1878 8.27083C10.1596 8.44589 10.0734 8.60641 9.94308 8.72668C9.81277 8.84696 9.64588 8.92003 9.46912 8.93419L8.37886 9.02155C6.64562 9.16133 4.90423 9.16133 3.17099 9.02155L2.08073 8.93419C1.90397 8.92003 1.73708 8.84696 1.60677 8.72668C1.47647 8.60641 1.39029 8.44589 1.36204 8.27083C1.19256 7.2225 1.1349 6.1602 1.19082 5.10255Z" fill="#FF131D"></path></svg>
                        </i>
                        
                        <p>Career Terms & Conditions</p>
                    </div>
                    <div className="nav_socials text-gray-400 ml-7">
                        <ul className="flex justify-evenly   w-40  ">
                            <li>
                                <Link to="https://facebook.com" target="_blank" className="socials flex justify-center items-center text-xs  border border-gray-400 rounded-full w-6 h-6">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://instagram.com" target="_blank" className="socials flex justify-center items-center text-xs  border border-gray-400 rounded-full w-6 h-6">
                                    <i className="fa-brands fa-instagram"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://youtube.com" target="_blank" className="socials flex justify-center items-center text-xs  border border-gray-400 rounded-full w-6 h-6">
                                    <i className="fa-brands fa-youtube"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://twitter.com" target="_blank" className="socials flex justify-center items-center text-xs  border border-gray-400 rounded-full w-6 h-6">
                                    <i className="fa-brands fa-x-twitter"></i>       
                                </Link>
                            </li>
                            <li>
                                <Link to="https://pinterest.com" target="_blank" className="socials flex justify-center items-center text-xs  border border-gray-400 rounded-full w-6 h-6">
                                    <i className="fa-brands fa-pinterest"></i>      
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container p-2.5 flex items-center justify-between">
                <Link to="/"><img src={logo} alt="logo"/></Link> 
                <div onClick={toggleSideBar} className="hamburger-menu w-11 h-11 border rounded-md flex flex-col justify-evenly items-center py-2">
                    <div className="bg-black h-0.5 w-6"></div>
                    <div className="bg-black h-0.5 w-6"></div>
                    <div className="bg-black h-0.5 w-6"></div>
                </div>
            </div>
            <div className={`container fixed w-72 h-screen bg-white top-0 right-0 z-10 ease-in-out duration-1000 ${isSideBarOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div onClick={toggleSideBar} className="cross">
                    <i className="fa-solid fa-xmark text-white bg-red-700 p-2"></i>
                </div>
                <div className="container px-2 flex flex-col">
                    <div className="side_top container px-4 py-5 flex flex-col items-start justify-between">
                        <Link to="/"><img src={logo} alt="logo"/></Link> 
                        <input className='w-[100%] h-10 mt-8 border px-3 text-xs outline-none' onChange={handleInput} value={search}  type="text" placeholder='Search Here'/>
                    </div>
                    <NavPages />
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;