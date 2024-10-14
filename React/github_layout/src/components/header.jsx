import bell from "../assets/notifications-outline.svg";
import headPhoto from "../assets/photo1.jpg";
import gitLogo from "../assets/github.svg";
import dropPix1 from "../assets/img.jpg";
import dropPix3 from "../assets/photo2.jpg";
import dropPix4 from "../assets/photo3.jpg";
import dropPix5 from "../assets/photo4.jpg";
import { useRef } from 'react';
const Header = () => {
    const profileDrop = useRef(null);
    const noteDrop = useRef(null);
    return (
        <header className="w-[calc(100%-280px)] h-[70px] bg-white fixed right-0 top-0 p-5 flex items-center shadow-[]">

            <form className="w-[50%]">
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative overflow-hidden">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="search" className="block w-full h-full p-4 ps-10 text-lg text-gray-900  rounded-md bg-white border-2 border-gray-500 focus:outline-none focus:ring-blue-800 focus:border-blue-800 overflow-hidden" placeholder="Search here" required />
                    <button type="submit" className="text-gray-600 text-lg absolute end-[1px] bottom-[50%] translate-y-[50%] border-none flex items-center justify-center bg-transparent hover:text-white hover:bg-blue-800 focus:outline-none font-medium rounded-r-md h-full  w-[50px] px-4 py-2 transition-all duration-500 ease-in-out "><i className='bx bx-down-arrow-alt'></i></button>
                </div>
            </form>
            <div className="w-[50%] flex items-center gap-3 justify-end">
                <div className="cursor-pointer " >
                <ion-icon name="settings-outline" size="large" ></ion-icon>
                </div>
                <div className="relative cursor-pointer" onClick={() => {noteDrop.current.classList.toggle('hidden');}}>
                    <img className="w-10 h-10 rounded" src={bell} alt="" />
                    <span className="absolute top-0 left-7 transform -translate-y-1/2 w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    <ul className="absolute top-[60px] right-[0px] w-[400px] h-[320px] rounded-xl bg-white shadow-lg p-4 overflow-y-scroll space-y-4 hidden" ref={noteDrop}>
                    <li>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <img src={dropPix1} alt="" className="rounded-2xl shadow-lg" />
                            <div className="flex flex-col gap-1">
                                <h1 className="text-sm font-bold text-blue-900">John Doe</h1>
                                <p className="text-xs text-slate-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ducimus...</p>
                            </div>
                        </div>
                    </li>
                    <li>
                    <div className="flex items-center gap-2 cursor-pointer">
                            <img src={headPhoto} alt="" className="rounded-2xl w-[60px] h-[60px] shadow-lg" />
                            <div className="flex flex-col gap-1">
                                <h1 className="text-sm font-bold text-blue-900">Lea R. Frith</h1>
                                <p className="text-xs text-slate-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ducimus...</p>
                            </div>
                        </div>
                    </li>
                    <li>
                    <div className="flex items-center gap-2 cursor-pointer">
                            <img src={dropPix3} alt="" className="rounded-2xl w-[60px] h-[60px] shadow-lg" />
                            <div className="flex flex-col gap-1">
                                <h1 className="text-sm font-bold text-blue-900">Erik L. Richards</h1>
                                <p className="text-xs text-slate-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ducimus...</p>
                            </div>
                        </div>
                    </li>
                    <li>
                    <div className="flex items-center gap-2 cursor-pointer">
                            <img src={dropPix4} alt="" className="rounded-2xl w-[60px] h-[60px] shadow-lg" />
                            <div className="flex flex-col gap-1">
                                <h1 className="text-sm font-bold text-blue-900">John Doe</h1>
                                <p className="text-xs text-slate-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ducimus...</p>
                            </div>
                        </div>
                    </li>
                    <li>
                    <div className="flex items-center gap-2 cursor-pointer">
                            <img src={dropPix5} alt="" className="rounded-2xl w-[60px] h-[60px] shadow-lg" />
                            <div className="flex flex-col gap-1">
                                <h1 className="text-sm font-bold text-blue-900">Renee I. Hanson</h1>
                                <p className="text-xs text-slate-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ducimus...</p>
                            </div>
                        </div>
                    </li>
                    <li>
                    <div className="flex items-center gap-2 cursor-pointer">
                            <img src={dropPix1} alt="" className="rounded-2xl w-[60px] h-[60px] shadow-lg" />
                            <div className="flex flex-col gap-1">
                                <h1 className="text-sm font-bold text-blue-900">Vicki M. Coleman</h1>
                                <p className="text-xs text-slate-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ducimus...</p>
                            </div>
                        </div>
                    </li>
                </ul>
                </div>

                <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" className="flex items-center relative text-sm pe-1 font-medium text-gray-900 rounded-full md:me-0 focus:outline-none" type="button" onClick={() => {profileDrop.current.classList.toggle('hidden');}}>
                    <div className="flex items-center text-lg">
                    <span className="sr-only">Open user menu</span>
                    <img className="w-11 h-11 me-2 rounded-full shadow-xl" src={headPhoto} alt="user photo"/>
                        Ross C. Lopez
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </div>
                        <ul className="absolute top-[60px] text-left h-auto overflow-hidden hidden  w-[200px] bg-white rounded-lg shadow-lg transition-all duration-700 ease-in-out text-lg" ref={profileDrop}>
                        <li>
                            <a href="#" className=" px-4 py-2 hover:bg-gray-100 hover:text-blue-800 transition-all duration-500 ease-in-out flex items-center gap-3"><ion-icon name="person-outline"></ion-icon> Profile</a>
                        </li>
                        <li>
                            <a href="#" className=" px-4 py-2 hover:bg-gray-100 hover:text-blue-800 transition-all duration-500 ease-in-out flex items-center gap-3"><ion-icon name="settings-outline"></ion-icon> Settings</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 hover:text-blue-800 transition-all duration-500 ease-in-out"><ion-icon name="person-add-outline"></ion-icon> Help</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 hover:text-blue-800 transition-all duration-500 ease-in-out"><ion-icon name="log-out-outline"></ion-icon> Logout</a>
                        </li>
                        </ul>
                </button>
                <div>
                    <a href="#"><img src={gitLogo} alt="" /></a>
                </div>

            </div>

        </header>
    )
}

export default Header