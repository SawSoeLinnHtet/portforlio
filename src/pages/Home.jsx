import React from "react";

const Home = () => {
    return (
        <section className="main-area w-full bg-slate-100 max-sm:pt-30 max-md:pt-20 flex justify-center items-center">
            <div className="greeting-content w-9/12 max-lg:w-full px-5 py-5 flex justify-center items-center flex-col">
                <p className="text-7xl max-md:text-5xl max-sm:text-4xl text-green-950 font-bold text-center mb-5">
                    HEY, I'M SAW SOE LINN HTET
                </p>
                <p className="text-md text-center text-slate-500 font-light text-xl tracking-wider">
                    A Web Developer building the Websites with Laravel and for the Frontend Development using Vue, React and other libraries, plugins, frameworks.
                </p>
                <a href="#project" className="bg-indigo-600 text-white rounded-md px-20 py-4 text-2xl mt-16 pb-5">
                    Projects
                </a>
            </div>
            <div className="social-tab bg-white drop-shadow-lg absolute p-2 left-0 max-md:hidden">
                <ul>
                    <li className="block px-3 py-2 pb-3 hover:bg-slate-300">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sawsoelinnhtet19@gmail.com" target="_blank" className="text-3xl" rel="noreferrer">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </li>
                    <li className="block px-3 py-2 pb-3 hover:bg-slate-300">
                        <a href="#App" target="_blank" className="text-3xl">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li className="block px-3 py-2 pb-3 hover:bg-slate-300">
                        <a href="https://github.com/SawSoeLinnHtet" target="_blank" className="text-3xl" rel="noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li className="block px-3 py-2 pb-3 hover:bg-slate-300">
                        <a href="#App" target="_blank" className="text-3xl">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </li>
                    <li className="block mb-2 px-3 py-2 pb-3 hover:bg-slate-300">
                        <a href="https://t.me/hazel_uchiha" target="_blank" className="text-3xl" rel="noreferrer">
                            <i className="fab fa-telegram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Home