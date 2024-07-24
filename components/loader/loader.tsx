"use client";

import React, { useEffect, useState } from "react";
import "./loader.css";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return <>{showLoader && <div className="clock-loader"></div>}</>;
};

export default Loader;
