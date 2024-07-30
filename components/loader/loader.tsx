"use client";

import React, { useEffect, useState } from "react";
import "./loader.css";

const PreLoader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && (
        <div className="bg fixed w-full h-full flex flex-col items-center justify-center overflow-hidden top-0 left-0 bottom-0 overflow-y-hidden z-50">
          <svg
            className="pl"
            viewBox="0 0 200 200"
            width="200"
            height="200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="pl-grad1" x1="1" y1="0.5" x2="0" y2="0.5">
                <stop offset="0%" stopColor="hsl(313,90%,55%)" />
                <stop offset="100%" stopColor="hsl(223,90%,55%)" />
              </linearGradient>
              <linearGradient id="pl-grad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(313,90%,55%)" />
                <stop offset="100%" stopColor="hsl(223,90%,55%)" />
              </linearGradient>
            </defs>
            <circle
              className="pl__ring"
              cx="100"
              cy="100"
              r="82"
              fill="none"
              stroke="url(#pl-grad1)"
              strokeWidth="36"
              strokeDasharray="0 257 1 257"
              strokeDashoffset="0.01"
              strokeLinecap="round"
              transform="rotate(-90,100,100)"
            />
            <line
              className="pl__ball"
              stroke="url(#pl-grad2)"
              x1="100"
              y1="18"
              x2="100.01"
              y2="182"
              strokeWidth="36"
              strokeDasharray="1 165"
              strokeLinecap="round"
            />
          </svg>
          <div className="mt-10">
            <h1 className="text-xl font-semibold">Please Wait </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default PreLoader;
