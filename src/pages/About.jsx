import React from "react";
import cv from '../assets/files/sawsoelinnhtet-cv-2023.pdf'

const About = () => {
    return (
        <section className="about px-10 max-lg:px-5 py-28 bg-slate-100" id="about">
            <div className="section-title container flex items-center justify-center flex-col text-center px-44 max-lg:px-5">
                <p className="text-4xl font-bold tracking-wider">ABOUT ME</p>
                <div className="px-5 py-1 bg-indigo-600 mt-5 rounded"></div>
                <p className="text-2xl mt-10 text-slate-700 font-normal">
                    Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
                </p>
            </div>
            <div className="flex mt-32 px-10 max-lg:flex-col max-lg:px-0">
                <div className="border-b-2 pb-10 flex-auto max-lg:flex-1 px-5 max-lg:px-0:pl-5 pr-10 max-md:pr-0 py-5 w-1/2 max-lg:w-full">
                    <p className="text-2xl tracking-wide font-semibold">
                        Get to know me!
                    </p>
                    <p className="text-lg mt-10 tracking-normal text-slate-500">
                        <span className="leading-9 block">
                            A Web Developer building the Websites with Laravel and for the Frontend Development using Vue, React and other libraries, plugins, frameworks.
                        </span>
                        <span className="leading-9 mt-2 block">
                                In August 2023, I achieved ‘Bachelor of Computer Science’ from Computer Science Major of Karen Baptist Theological Seminary (LAP). I have developed a solid foundation in programming and software development.
                        </span>
                        <span className="leading-9 mt-2 block">
                            I started learning eb development in last 2 years with my mentor. From PHP to Laravel, JavaScript to VueJs and other related technic. Now I think, I have enough knowledge to start my career to a professional.
                        </span>
                    </p>
                    <button className="bg-indigo-600 text-white rounded-md px-12 py-3 text-2xl mt-10 pb-4">
                        Contact
                    </button>
                </div>
                <div className="border-b-2 flex-auto max-lg:flex-1 px-5 py-5 w-1/2 max-lg:w-full">
                    <p className="text-2xl tracking-wider font-semibold">
                        My Skills
                    </p>
                    <div className="mt-10 flex flex-wrap gap-5 tracking-wide">
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            HTML
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            CSS
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            JavaScript
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            PHP
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            JQuery
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            AlpineJs
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            Bootstrap
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            TailwindCSS
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            Laravel
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            VueJS
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            React
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            AJAX
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            Pinia
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            Vuex
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            NuxtJs
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            APIs
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            OOP
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            Rest Api
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            FireBase
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            Supabase
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            Ui/Ux
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            Responsive Design
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            GIT
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            GitHub
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            MYSQL
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            Linux Knowledge
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            Terminal
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            Plugins
                        </div>
                        <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                            Package
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mt-10 max-md:mt-8 px-10 max-lg:flex-col max-lg:px-0">
                <div className="flex-auto max-lg:flex-1 px-5 max-lg:px-0:pl-5 pr-10 max-lg:pr-0 py-5 w-1/2 max-lg:w-full">
                    <p className="text-2xl tracking-wide font-semibold">
                        Information
                    </p>
                    <div className="mt-10">
                        <p className="text-lg flex">
                            <i className="fas fa-calendar-alt mt-1 text-xl text-indigo-700"></i>
                            <span className="ml-3 text-slate-700 mr-1">Birth Date </span>
                            :
                            <span className="ml-3">
                                6/8/2002
                            </span>
                        </p>
                        <p className="text-lg mt-4 flex">
                            <i className="fas fa-venus-mars text-xl mt-1 text-indigo-700"></i>
                            <span className="ml-3 text-slate-700 mr-1">Gender </span>
                            :
                            <span className="ml-3">
                                Male
                            </span>
                        </p>
                        <p className="text-lg mt-4 flex">
                            <i className="fas fa-phone text-xl mt-1 rotate-90 text-indigo-700"></i>
                            <span className="ml-3 text-slate-700 mr-1">Phone</span> 
                            :
                            <span className="ml-3 inline">
                                09962569030, 09424853424, 09770042914
                            </span>
                        </p>
                        <p className="text-lg mt-4 flex">
                            <i className="fas fa-envelope text-xl mt-1 text-indigo-700"></i>
                            <span className="ml-3 text-slate-700 mr-1">Gmail</span>
                            :
                            <span className="ml-3">
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sawsoelinnhtet19@gmail.com" className="underline decoration-blue-400">sawsoelinnhtet19@gmail.com</a>
                            </span>
                        </p>
                        <p className="text-lg mt-4 flex">
                            <i className="fab fa-github text-xl mt-1 text-indigo-700"></i>
                            <span className="ml-3 text-slate-700 mr-1">GitHub</span>
                            :
                            <span className="ml-3">
                                <a href="https://github.com/SawSoeLinnHtet" className="underline decoration-blue-400">https://github.com/SawSoeLinnHtet</a>
                            </span>
                        </p>
                        <p className="text-lg mt-4 flex">
                            <i className="fas fa-map-marker-alt text-xl mt-1 text-indigo-700"></i>
                            <span className="ml-3 text-slate-700 mr-1">Address</span>
                            :
                            <span className="ml-3">
                                Oak Yay Twin St, Taung Thu Gone, Insein, Yangon
                            </span>
                        </p>
                    </div>
                </div>
                <div className="flex-auto max-lg:flex-1 px-5 py-5 w-1/2 max-lg:w-full">
                    <p className="text-2xl tracking-wider font-semibold">
                        Experiences
                    </p>
                    <div className="mt-10">
                        <div className="flex items-start">
                            <span className="text-slate-700 mt-1 w-1/2">April - July 2022</span>
                            <div className="pl-10">
                                <p className="flex justify-between mb-2">
                                    <span className="text-xl">Junior Frontend Developer</span>
                                </p>
                                <span className="text-slate-600 mb-4 block">
                                    Internship
                                </span>
                                <p>
                                    <span className="text-xl text-slate-700">Klonotech</span>
                                </p>
                                <ul className="mt-2 tracking-wide text-slate-700">
                                    <li>
                                        Develop lyrics and music website as <a href="https://genius.com/" className="underline decoration-blue-400">genius.com</a> and <a href="https://www.azlyrics.com/" className="underline decoration-blue-400">azlyrics.com</a>
                                    </li>
                                    <li className="mt-2">
                                        Used Nuxt(VueFramework) and SUPABASE(OnlineDB)
                                    </li>
                                    <li className="mt-2">
                                        Learned how to work with team, usage of GitHub and Linux Distro
                                    </li>
                                </ul>
                                <div className="mt-5 flex flex-wrap gap-5 tracking-wide">
                                    <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                        VueJs
                                    </div>
                                    <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                        NuxtJs
                                    </div>
                                    <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                        Git
                                    </div>
                                    <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                        SUPABASE
                                    </div>
                                    <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                        Linux
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col mt-20">
                <p className="text-3xl text-center">If you want to know more about me,<br/> click to download my CV</p>
                <a href={cv} className="bg-violet-600 text-white rounded-md px-12 py-4 text-2xl mt-12 pb-5" download>
                    Download CV directly <i className="fas fa-download animate-bounce ml-2"></i>
                </a>
            </div>
        </section>
    );
}

export default About;