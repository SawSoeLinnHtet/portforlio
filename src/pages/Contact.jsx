import React from "react";
import Mailing from "../components/Mail";

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
                <Mailing/>
            </div>
        </section>
    )
}

export default Contact