import React from "react";
import knowtopix from '../assets/img/knowtopix.png'
import hiwallet from '../assets/img/hi-wallet.png'
import cinemaplus from '../assets/img/cinemaplus.png'
import maharbote from '../assets/img/maharbote.png'


const Projects = () => {
    return (
        <section className="project px-10 max-lg:px-5 py-28" id="project">
            <div className="section-title container flex items-center justify-center flex-col text-center px-44 max-lg:px-5">
                <p className="text-4xl font-bold tracking-wider">PROJECTS</p>
                <div className="px-5 py-1 bg-indigo-600 mt-5 rounded"></div>
                <p className="text-2xl mt-10 text-slate-700 font-normal">
                    Here you will find some of the personal projects that I created
                </p>
            </div>
            <div className="flex mt-32 max-lg:mt-16 px-10 max-lg:flex-col max-lg:px-0">
                <div className="pb-10 flex-auto max-lg:flex-1 px-5 max-lg:px-0 pr-10 max-md:pr-0 py-5 w-1/2 max-lg:w-full">
                    <img src={knowtopix} alt="" className="border-2 p-3 rounded-xl shadow-2xl shadow-violet-400"/>
                </div>
                <div className="flex-auto max-lg:flex-1 px-5 py-5 w-1/2 max-lg:w-full">
                    <div className="tracking-wide">
                        <p className="text-2xl font-semibold">Knowtopix Social and Blogs</p>
                        <p className="mt-10 text-lg font-normal text-slate-800">
                            KnowTopix is a social-media and blogs platform that contain create posts and users are communicate with each others using with the action.
                            Blogs feature is for writers and knowledge sharers to share content with this.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-5 tracking-wide">
                            <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                Laravel
                            </div>
                            <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                Javascript
                            </div>
                            <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                Jquery
                            </div>
                            <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                AlpineJs
                            </div>
                            <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                AJAX
                            </div>
                            <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                MYSQL
                            </div>
                            <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                BOOTSTRAP
                            </div>
                            <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                Libraries
                            </div>
                            <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                Plugins
                            </div>
                            <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                Packages
                            </div>
                        </div>
                        <div className="mt-10">
                            <a href="https://github.com/SawSoeLinnHtet/knowtopix-repo-final" target="_blank" className="text-violet-600 rounded-md px-5 py-4 text-lg" rel="noreferrer">
                                Click more about details <i className="fas fa-arrow-right ml-2 animate-bounce"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mt-32 max-lg:mt-16 px-10 max-lg:flex-col max-lg:px-0">
                <div className="pb-10 flex-auto max-lg:flex-1 px-5 max-lg:px-0 pr-10 max-md:pr-0 py-5 w-1/2 max-lg:w-full">
                    <img src={hiwallet} alt="" className="border-2 p-3 rounded-xl shadow-2xl shadow-violet-400"/>
                </div>
                <div className="flex-auto max-lg:flex-1 px-5 py-5 w-1/2 max-lg:w-full">
                    <div className="tracking-wide">
                        <p className="text-2xl font-semibold">Hi Wallet</p>
                        <p className="mt-10 text-lg font-normal text-slate-800">
                            Hi Wallet is the wallet system which can transfer amount between users. It contains with QR Scan system and other process. I learned this from youtube course for idea and coding process. 
                        </p>
                        <div className="mt-5 flex flex-wrap gap-5 tracking-wide">
                            <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                Laravel
                            </div>
                            <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                Javascript
                            </div>
                            <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                Jquery
                            </div>
                            <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                AJAX
                            </div>
                            <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                MYSQL
                            </div>
                            <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                BOOTSTRAP
                            </div>
                            <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                Plugins
                            </div>
                            <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                Packages
                            </div>
                        </div>
                        <div className="mt-10">
                            <a target="_blank"  href="https://github.com/SawSoeLinnHtet/hi-wallet-app" className="text-violet-600 rounded-md px-5 py-4 text-lg" rel="noreferrer">
                                Click more about details <i className="fas fa-arrow-right ml-2 animate-bounce"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mt-32 max-lg:mt-16 px-10 max-lg:flex-col max-lg:px-0">
                <div className="pb-10 flex-auto max-lg:flex-1 px-5 max-lg:px-0 pr-10 max-md:pr-0 py-5 w-1/2 max-lg:w-full">
                    <img src={cinemaplus} alt="" className="border-2 p-3 rounded-xl shadow-2xl shadow-violet-400"/>
                </div>
                <div className="flex-auto max-lg:flex-1 px-5 py-5 w-1/2 max-lg:w-full">
                    <div className="tracking-wide">
                        <p className="text-2xl font-semibold">Cinema Plus</p>
                        <p className="mt-10 text-lg font-normal text-slate-800">
                            Cinema Plus for movie enjoyers. In this web, you can know what movies are latest and trending. You can allow watch their trailer. This is developed by <a href="https://www.themoviedb.org/" className="underline decoration-blue-400">https://www.themoviedb.org/</a> 's APIs. 
                        </p>
                        <div className="mt-5 flex flex-wrap gap-5 tracking-wide">
                            <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                VueJS
                            </div>
                            <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                Pinia
                            </div>
                            <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                Axios
                            </div>
                            <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                APIs
                            </div>
                        </div>
                        <div className="mt-10">
                            <a href="https://cinemaplusplus.vercel.app/" target="_blank"  className="text-violet-600 rounded-md px-5 py-4 text-lg" rel="noreferrer">
                                Click more about details <i className="fas fa-arrow-right ml-2 animate-bounce"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mt-32 max-lg:mt-16 px-10 max-lg:flex-col max-lg:px-0">
                <div className="pb-10 flex-auto max-lg:flex-1 px-5 max-lg:px-0 pr-10 max-md:pr-0 py-5 w-1/2 max-lg:w-full">
                    <img src={maharbote} alt="" className="border-2 p-3 rounded-xl shadow-2xl shadow-violet-400"/>
                </div>
                <div className="flex-auto max-lg:flex-1 px-5 py-5 w-1/2 max-lg:w-full">
                    <div className="tracking-wide">
                        <p className="text-2xl font-semibold">Mahar Bote Pyin Nyar (Beta)</p>
                        <p className="mt-10 text-lg font-normal text-slate-800">
                            Mahar Bote, Astrology, like other astrology, what day will it be? When will it happen? It is not wisdom that tells when it will be and when it will be. If he does according to his own will, and if he doesn't do it, If you buy it, you own it. If you don't buy it, you don't own it. If you take it, you get it, if you don't take it, you don't get it. It is the knowledge that can distinguish what is beneficial only according to the karma that is made by oneself.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-5 tracking-wide">
                            <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                VueJS
                            </div>
                            <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                SUPABASE
                            </div>
                            <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                BOOTSTRAP
                            </div>
                            <div className="bg-slate-200 text-gray-500 rounded-md inline-block px-5 py-3">
                                APIs
                            </div>
                        </div>
                        <div className="mt-10">
                            <a href="https://mahar-bote.vercel.app" target="_blank"  className="text-violet-600 rounded-md px-5 py-4 text-lg" rel="noreferrer">
                                Click more about details <i className="fas fa-arrow-right ml-2 animate-bounce"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects