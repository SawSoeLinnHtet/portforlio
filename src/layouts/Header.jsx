import React from "react";
import logo from '../assets/img/man.png'

const Header = () => {
    return (
        <div className="nav-bar w-full bg-white flex py-2 justify-between fixed z-50">
            <div className="logo pl-16 max-md:pl-3">
                <a href="#App" className="flex justify-center items-center mt-2">
                    <img src={logo} className="w-8 mt-1" alt="logo"/>
                    <h1 className="text-2xl font-bold ml-5 tracking-widest">Saw Soe Linn Htet</h1>
                </a>
            </div>
            <div className="responsive-menu hidden max-lg:block">
                <button className="toggle-btn mt-1 text-gray-700 rounded-lg mr-3 outline-none px-5 py-3 border-2">
                    <i className="fas fa-bars text-2xl"></i>
                </button>
            </div>
            <div className="nav-menu flex items-center max-lg:hidden">
                <ul className="flex justify-end items-center text-lg pr-10 font-medium tracking-wider">
                    <li className="py-6 px-9">
                        <a href="#App" className="hover:text-indigo-600">
                            Home
                        </a>
                    </li>
                    <li className="py-6 px-9">
                        <a href="#about" className="hover:text-indigo-600">
                            About
                        </a>
                    </li>
                    <li className="py-6 px-9">
                        <a href="#project" className="hover:text-indigo-600">
                            Projects
                        </a>
                    </li>
                    <li className="py-6 px-9">
                        <a href="#contact" className="hover:text-indigo-600">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            <div id="responsive-menu" className="hidden shadow-lg absolute mt-[75px] border-t-2 flex justify-end top-0 left-0 z-10 w-full bg-white">
                <ul className="w-full flex flex-col text-sm font-semibold tracking-widest text-left  [&_li:hover]:text-violet-600">
                    <li className="py-4 pl-4 border-b-2 w-full cursor-pointer">
                        <a href="" className="block">
                            HOME
                        </a>
                    </li>
                    <li className="py-4 pl-4 border-b-2 w-full cursor-pointer">
                        <a href="#about" className="block">
                            ABOUT
                        </a>
                    </li>
                    <li className="py-4 pl-4 border-b-2 w-full cursor-pointer">
                        <a href="#project" className="block">
                            PROJECTS
                        </a>
                    </li>
                    <li className="py-4 pb-5 pl-4 w-full cursor-pointer">
                        <a href="#contact" className="block">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;