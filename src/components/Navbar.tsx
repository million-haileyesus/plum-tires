import { Link } from "react-scroll";

function Navbar() {
    return (
        <header className=" top-0 z-50 bg-white shadow-sm">
            <nav className="px-4 lg:px-6 py-2.5">
                <div className="flex flex-row justify-between items-center mx-auto max-w-screen-xl">
                    <a href="/" className="flex items-center">
                        <img src="/plum_logo.jpg" className="mr-2 w-10 h-10 lg:w-16 lg:h-17" alt="PLUM"/>
                        <span className="self-center text-xl sm:text-2xl lg:text-[70px] font-bold whitespace-nowrap text-[#8C3e90]">
                            PLUM TIRES
                        </span>
                    </a>
                    <div className="flex items-center">
                        <ul className="flex flex-row space-x-3 sm:space-x-4 lg:space-x-8 font-normal">
                            <li>
                                <Link
                                    to="/"
                                    className="block py-2 text-[14px] sm:text-[16px] lg:text-[20px] font-[Poppins Extra Light] text-black hover:text-[#8C3e90]"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="about"
                                      className="block py-2 text-[14px] sm:text-[16px] lg:text-[20px] font-[Poppins Extra Light] text-black hover:text-[#8C3e90]"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="footer"
                                    className="block py-2 text-[14px] sm:text-[16px] lg:text-[20px] font-[Poppins Extra Light] text-black hover:text-[#8C3e90]"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    );
}

export default Navbar;