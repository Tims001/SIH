

function Footer(){
    return(
        <footer className="h-[5vh] px-9 bg-gray-700 flex items-center justify-end">
            <p className=" text-white text-base font-medium">&copy; {new Date().getFullYear()} Timz Nation</p>
        </footer>
    )
}

export default Footer;