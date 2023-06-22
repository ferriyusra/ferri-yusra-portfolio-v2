"use client";

import { useEffect, useState } from "react";
import LandingLogoAnimation from "./landingLogoAnimation";

function Landing() {
  const darkMode = JSON.parse(localStorage.getItem("darkMode"));

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-5 md:py-20">
        <div className="max-w-6xl mb-36 md:mb-24 mx-auto px-4 py-10 mt-12 md:mt-0">
          <div className="text-center relative">
            <h1 className="text-4xl md:text-7xl font-bold text-gray-700 dark:text-gray-200">Backend Developer</h1>
            <p className="text-gray-400 md:text-xl py-5">Specialised in</p>
            <h3 className="font-semibold md:text-2xl pb-5 text-gray-700 dark:text-gray-400">Web Apps &amp; Web Service</h3>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-5 py-20 mb-20 md:mb-24 flex flex-wrap">
        <div className="w-full md:w-7/12" id="learnmore">
          <div className={`text-3xl md:text-5xl lg:text-6xl font-bold ${darkMode ? 'text-white' : 'dark'} mr-12 leading-relaxed`}>
            <div style={{ overflow: "hidden", display: "flex", opacity: 1 }}>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                C
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                r
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                e
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                a
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                t
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                i
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                n
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                g
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                &nbsp;
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                m
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                o
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                d
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                e
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                r
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                n
              </span>
            </div>
            <div style={{ overflow: "hidden", display: "flex", opacity: 1 }}>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                w
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                e
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                b
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                &nbsp;
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                a
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                p
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                p
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                l
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                i
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                c
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                a
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                t
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                i
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                o
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                n
              </span>
            </div>
            <div style={{ overflow: "hidden", display: "flex", opacity: 1 }}>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                &amp;
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                &nbsp;
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                w
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                e
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                b
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                &nbsp;
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                s
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                e
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                r
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                v
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                i
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                c
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                e
              </span>
              <span className="py-1 font-poppins" style={{ opacity: 1, transform: "none" }}>
                .
              </span>
            </div>
          </div>
          <p className={`mt-5 lg:text-xl ${darkMode ? 'dark:text-gray-300' : 'text-gray-500'} `}>
            I using modern tech stack to develop web applications and web services to purpose requirements users.
          </p>
          <div className="max-w-xs text-center mb-16 md:mb-2 px-10 mt-8">
            <a href="/about">
              <p className={`${darkMode ? 'bg-slate-200 text-black' : 'bg-black text-white'} hover:scale-105 cursor-pointer transition-all  shadow-xl px-5 py-3 text-xl rounded-xl mt-4`}>
                About
              </p>
            </a>
          </div>
        </div>
        <LandingLogoAnimation />
      </div>
    </>

  );
}

export default Landing;
