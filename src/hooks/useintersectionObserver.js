import { useState, useEffect } from "react";

export const useIntersectionObserver = () => {
  const [hasAnimated, setHasAnimated] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated[entry.target.id]) {
          setHasAnimated((pre) => ({
            ...pre,
            [entry.target.id]: true,
          }));
        }
      });
    },
    {
       threshold: 0.1 
    }
);

   document.querySelectorAll('[id]').forEach((el) => observer.observe(el));

   return () => {
        observer.disconnect();
   };
  },[hasAnimated]);
    return hasAnimated;
};
