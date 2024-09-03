import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className=" mb-20  flex w-full items-center justify-between px-2 bg-white bg-opacity-35">
            <div className="flex flex-shrink-0 text-2xl italic font-semibold items-center text-black ">
                Gayatri
            </div>
            <div className=" hidden md:flex flex-row gap-4 p-4 text-black">
                <ul className="flex space-x-4">
                    <li>
                        <NavLink to="/" className="hover:text-cyan-400">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="hover:text-cyan-400">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="hover:text-cyan-400">
                            Tecnologies
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-3xl text-black">
                <FaLinkedin />
                <FaGithub />
                <FaInstagram />
                <FaFacebook />
            </div>
        </nav>
    );
};

export default Navbar;
