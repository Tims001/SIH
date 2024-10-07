import { useRef } from 'react';
export default function Navbar(){
    const navigate = useRef(null);
    return (

        <div className="flex items-center justify-between px-11 h-[10vh] bg-transparent max-sm:px-7">
            <a href="#" className="text-3xl  text-white logo max-sm:text-2xl"><span className="text-amber-600">Chari</span>Team</a>
            <ul ref={navigate} className="flex items-center gap-11 text-white font-medium transition-all duration-1000 ease-in-out max-sm:flex-col max-sm:fixed max-sm:top-0 max-sm:right-[-300px] max-sm:h-[100vh] max-sm:bg-black max-sm:w-[300px] max-sm:py-11 max-sm:items-start max-sm:px-9">
                <a href="#" className="text-amber-600">Home</a>
                <a href="#">About</a>
                <a href="#">Causes</a>
                <a href="#">Pages</a>
                <a href="#">Contact</a>
                <button className="text-amber-500 border-amber-500 border-[1px] h-12 w-40 rounded-lg cursor-pointer inline-flex items-center gap-3 justify-center font-bold hover:bg-amber-500 hover:text-white transition duration-500 ease-in-out hover:shadow-lg hover:shadow-amber-500/50">Donate Now <i className='bx bx-right-arrow-alt h-8 w-8 bg-white inline-flex items-center justify-center text-xl rounded-full text-amber-500'></i></button>
                <a href="#"><i className='bx bx-x hidden max-sm:block max-sm:absolute max-sm:top-4 max-sm:right-6' onClick={() => {navigate.current.classList.remove("max-sm:right-[0px]"); navigate.current.classList.add("max-sm:right-[-300px]"); navigate.current.classList.remove("md:right-[0px]"); navigate.current.classList.add("md:right-[-300px]"); }}></i></a>
            </ul>
            <i id="bar" className='bx bx-left-indent hidden max-sm:block text-white text-3xl' onClick={() => {navigate.current.classList.remove("max-sm:right-[-300px]"); navigate.current.classList.add("max-sm:right-[0px]"); navigate.current.classList.add("md:right-[0px]"); navigate.current.classList.remove("md:right-[-300px]"); }}></i>
        </div>
    )
}