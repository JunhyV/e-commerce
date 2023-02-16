import { useState } from "react";

export const useWindow = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
  
    const adaptSize = window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  
    return {
      windowSize,
      adaptSize
    }
  }

export default useWindow;