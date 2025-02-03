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
                    Here you will find some of the personal projects that I created for your reference
                </p>
            </div>
            <div className="flex mt-32 max-lg:mt-16 px-10 max-lg:flex-col max-lg:px-0">
                <div className="pb-10 flex-auto max-lg:flex-1 px-5 max-lg:px-0 pr-10 max-md:pr-0 py-5 w-1/2 max-lg:w-full">
                    <img src={knowtopix} alt="" className="border-2 p-3 rounded-xl shadow-2xl shadow-violet-400"/>
                </div>
                <div className="flex-auto max-lg:flex-1 px-5 py-5 w-1/2 max-lg:w-full">
                    <div className="tracking-wide">
                        <p className="text-2xl font-semibold">Knowtopix Social and Blogs ( 2023 ) </p>
                        <p className="mt-10 text-lg font-normal text-slate-800">
                        KnowTopix is a social media and blogging platform where users can create posts and engage with each other through various interactions. The blogging feature is designed for writers and knowledge sharers to share valuable content with the community.
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
                        <p className="text-2xl font-semibold">Hi Wallet (2023) </p>
                        <p className="mt-10 text-lg font-normal text-slate-800">
                        Hi Wallet is a digital wallet system that allows users to transfer funds between accounts. It includes a QR code scanning feature along with other transaction processes. I learned about this concept and its coding implementation from a YouTube course.
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
                        <p className="text-2xl font-semibold">Cinema Plus (2022) </p>
                        <p className="mt-10 text-lg font-normal text-slate-800">
                            Cinema Plus is a platform for movie enthusiasts, providing the latest and trending movie updates. Users can watch trailers and stay informed about upcoming releases. This project is powered by APIs from The Movie Database TMDb) and was my starting point for learning Vue.js.
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
                        <p className="text-2xl font-semibold">Mahar Bote Pyin Nyar - Beta (2023)</p>
                        <p className="mt-10 text-lg font-normal text-slate-800">
                        Mahar Bote is an astrology-based system that, unlike traditional astrology, does not predict exact dates or events. Instead, it emphasizes personal choice and karma—what happens depends on one's own actions. If you take action, you receive results; if you don't, you wonʼt. This knowledge helps distinguish what is truly beneficial based on one's own deeds.
                        <br/>This project uses Supabase API for data storage and management.
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