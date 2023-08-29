"use client"
import { useEffect, useState } from "react";

const useCheckMobileScreen = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }
  }, []);

  return width <= 1024;
};

export default useCheckMobileScreen;