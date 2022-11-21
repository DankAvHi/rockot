"use client";
import { useLayoutEffect, useState } from "react";

const useScrollPosition = () => {
     const [scrollPosition, setScrollPosition] = useState(0);
     useLayoutEffect(() => {
          const updateScrollPosition = () => {
               setScrollPosition(window.pageYOffset);
          };
          window.addEventListener("scroll", updateScrollPosition);
          updateScrollPosition();
          return () => window.removeEventListener("scroll", updateScrollPosition);
     }, []);
     return scrollPosition;
};

export default useScrollPosition;
