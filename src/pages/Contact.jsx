import React from "react";

const Contact = () => {
    return (
        <section className="contact px-10 py-28" id="contact">
            <div className="section-title container flex items-center justify-center flex-col text-center px-44 max-lg:px-5">
                <p className="text-4xl font-bold tracking-wider">CONTACT</p>
                <div className="px-5 py-1 bg-indigo-600 mt-5 rounded"></div>
                <p className="text-2xl mt-10 text-slate-700 font-normal">
                    Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
                </p>
            </div>
            <div className="contact-form container flex items-center justify-center px-10 max-lg:px-0 py-10">
                <div className="px-10 py-10 bg-white w-8/12 max-lg:w-full rounded-sm drop-shadow-lg">
                    <form action="">
                        <div className="w-full mb-5">
                            <label for="" className="block text-lg text-gray-600 font-semibold mb-3">
                                Name
                            </label>
                            <input type="text" placeholder="Enter Your Name" className="w-full rounded bg-slate-200 py-4 pl-5 outline-none text-gray-600 tracking-wide"/>
                        </div>
                        <div className="w-full mb-5">
                            <label for="" className="block text-lg text-gray-600 font-semibold mb-3">
                                Email
                            </label>
                            <input type="text" placeholder="Enter Your Email" className="w-full rounded bg-slate-200 py-4 pl-5 outline-none text-gray-600 tracking-wide"/>
                        </div>
                        <div className="w-full mb-5">
                            <label for="" className="block text-lg text-gray-600 font-semibold mb-3">
                                Message
                            </label>
                            <textarea name="" id="" cols="30" rows="8" placeholder="Enter Your Message" className="w-full rounded bg-slate-200 py-4 pl-5 outline-none text-gray-600 tracking-wide resize-none"></textarea>
                        </div>
                        <div className="w-full mb-5 flex items-center justify-end">
                            <button className="bg-indigo-600 text-white rounded-md px-10 py-3 text-xl pb-4">
                                Submit <i className="fab fa-telegram-plane ml-2"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact