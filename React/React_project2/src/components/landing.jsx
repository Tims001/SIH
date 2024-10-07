
const Landing = () => {
    return (
        <div className="h-[80vh] w-full flex items-center justify-between px-11 max-sm:px-4">
            <span className=" max-sm:h-8  max-sm:w-8  h-16 w-16 rounded-full bg-neutral-600 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition duration-500 ease-in-out"><i className='bx bx-chevron-left text-3xl text-white'></i></span>
            <div className="text-center space-y-5">
                <h1 className="text-5xl text-white font-extrabold font-sans max-sm:text-3xl text-nowrap max-[399px]:text-xl md:text-4xl">Let&#39;s change the world <br /> with humanity</h1>
                <p className="text-gray-400 max-sm:text-xs max-[399px]:text-[8px] md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cumque sapiente ducimus, aperiam beatae officia quaerat <br /> perferendis porro itaque odit!</p>
                <button className="text-white border-none bg-amber-500 h-12 w-40 rounded-lg cursor-pointer inline-flex items-center gap-3 justify-center font-bold transition duration-500 ease-in-out hover:shadow-lg hover:shadow-amber-500/50">Learn more <i className='bx bx-right-arrow-alt h-8 w-8 bg-white inline-flex items-center justify-center text-xl rounded-full text-amber-500'></i></button>
            </div>
            <span className="max-sm:h-8 max-sm:w-8 h-16 w-16 rounded-full bg-neutral-600 flex items-center justify-center hover:bg-gray-700 transition duration-500 ease-in-out cursor-pointer"><i className='bx bx-chevron-right text-3xl text-white'></i></span>
        </div>
    )
}

export default Landing