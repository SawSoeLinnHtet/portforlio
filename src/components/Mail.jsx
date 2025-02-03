import React from 'react';
import { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Mailing = () => {
    const emailRef = useRef();
    const nameRef = useRef();
    const msgRef = useRef();
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(false);

    useEffect(() => emailjs.init('mV_CnjWTA0U9lHj_3'), []);

    const successToast = () => toast.success('Mail Sent Successfully!');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceId = "service_nnwai6i";
        const templateId = "template_2bm8u5j";

        try {
            setLoading(true);

            await emailjs.send(serviceId, templateId, {
                name: nameRef.current.value,
                recipient: emailRef.current.value,
                message: msgRef.current.value
            });
            successToast();
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    function SendEmail() {
        if(!loading) {
            return (
                <button className="bg-indigo-600 text-white rounded-md px-10 py-3 text-xl pb-4">
                    Submit <i className="fab fa-telegram-plane ml-2"></i>
                </button>
            )
        } else {
            return (
                <button className="bg-indigo-600 text-white rounded-md px-10 py-3 text-xl pb-4">
                    <i className="fas fa-spinner animate-spin"></i>
                </button>
            )
        }
    }

    return (
        <div className="px-10 py-10 bg-white w-8/12 max-lg:w-full rounded-sm drop-shadow-lg">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (
                        !nameRef.current.value.trim() ||
                        !emailRef.current.value.trim() ||
                        !msgRef.current.value.trim()
                    ) {
                        return toast.error('Please fill in all fields');
                    }
                    handleSubmit(e);
                }}
            >
                <div className="w-full mb-5">
                    <label className="block text-lg text-gray-600 font-semibold mb-3">
                        Name
                    </label>
                    <input
                        type="text"
                        ref={nameRef}
                        placeholder="Enter Your Name"
                        className="w-full rounded bg-slate-200 py-4 pl-5 outline-none text-gray-600 tracking-wide"
                    />
                </div>
                <div className="w-full mb-5">
                    <label className="block text-lg text-gray-600 font-semibold mb-3">
                        Email
                    </label>
                    <input
                        type="text"
                        ref={emailRef}
                        placeholder="Enter Your Email"
                        className="w-full rounded bg-slate-200 py-4 pl-5 outline-none text-gray-600 tracking-wide"
                    />
                </div>
                <div className="w-full mb-5">
                    <label className="block text-lg text-gray-600 font-semibold mb-3">
                        Message
                    </label>
                    <textarea
                        ref={msgRef}
                        cols="30"
                        rows="8"
                        placeholder="Enter Your Message"
                        className="w-full rounded bg-slate-200 py-4 pl-5 outline-none text-gray-600 tracking-wide resize-none"
                    />
                </div>
                <div className="w-full mb-5 flex items-center justify-end">
                    <SendEmail/>
                </div>
            </form>
        </div>
    )
}

export default Mailing;