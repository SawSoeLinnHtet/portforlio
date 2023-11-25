import React from "react";

const Footer = () => {
    return (
        <section className="footer px-28 max-lg:px-10 pt-20 pb-10 bg-black">
          <div className="flex text-white border-b-2 pb-10 justify-between max-md:flex-col">
              <div className="w-4/12 max-md:w-full">
                  <h1 className="text-2xl">Saw Soe Linn Htet</h1>
                  <p className="mt-6 text-md text-slate-300 font-light tracking-wider leading-6">
                      A Full-Stack Web Developer building the Websites with Laravel and for the Frontend Development using Vue, React and other libraries, plugins, frameworks.
                  </p>
              </div>
              <div className="w-2/12 max-md:w-full max-md:mt-5">
                  <h1 className="text-2xl">Social</h1>
                  <ul className="mt-5 flex flex-wrap gap-3">
                      <li>
                          <a href="" className="text-2xl">
                              <i className="fas fa-envelope"></i>
                          </a>
                      </li>
                      <li>
                          <a href="" className="text-2xl">
                              <i className="fab fa-twitter"></i>
                          </a>
                      </li>
                      <li>
                          <a href="" className="text-2xl">
                              <i className="fab fa-github"></i>
                          </a>
                      </li>
                      <li>
                          <a href="" className="text-2xl">
                              <i className="fab fa-facebook"></i>
                          </a>
                      </li>
                      <li>
                          <a href="" className="text-2xl">
                              <i className="fab fa-telegram-plane"></i>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
          <p className="text-white text-center mt-5 text-sm font-light tracking-widedr">
              © Copyright 2023-2024. Made by <a href="#" className="underline font-semibold">Saw Soe Linn Htet</a>
          </p>
        </section>
    );
}

export default Footer;