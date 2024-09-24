
function Button(){
    return(
        <button className="inline-flex gap-2 text-white items-center justify-center w-[300px] bg-gray-700 hover:bg-gray-600 rounded-[30px] transition duration-500 ease-in-out py-2">
            <i className='bx bxs-cart-alt'></i>
            <p className='text-white font-semibold text-sm'>Buy now for $244.60</p>
        </button>
    )
}
export default Button;