
function Header(){
    return(
        <div className="flex items-center justify-between w-[100%] px-28 h-[10vh] bg-black">
            <a href="#" className="text-lg">Timz React</a>
            <ul className="flex items-center gap-8 text-white">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    )
}

export default Header;