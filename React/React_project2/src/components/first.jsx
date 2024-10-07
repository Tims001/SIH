
function Reactcomp(){
    return(
        <div className="flex items-center justify-between px-11 h-10 bg-transparent text-gray-300 border-b-[.5px] border-gray-400 max-sm:px-5">
            <div className="flex gap-5">
                <p className="flex items-center gap-1 text-sm max-sm:text-[7px]"><i className='bx bxs-map'></i><span> 123 Street, New York, USA</span></p>
                <p className="flex items-center gap-1 text-sm max-sm:text-[7px]"><i className='bx bxs-envelope'></i> info@example.com</p>
            </div>
            <div>
                <p className="flex items-center gap-1 text-sm max-sm:text-[7px]"><span>Follow us:</span> <i className='bx bxl-facebook'></i> <i className='bx bxl-twitter'></i> <i className='bx bxl-linkedin'></i> <i className='bx bxl-instagram'></i></p>
            </div>
        </div>
    )
}
export default Reactcomp;