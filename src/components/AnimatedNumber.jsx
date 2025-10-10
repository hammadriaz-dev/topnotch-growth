import React, { useState, useEffect, useRef } from 'react';

const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = value;
          const duration = 2000; // 2 seconds
          const increment = end / (duration / 10); // Update every 10ms

          const timer = setInterval(() => {
            start += increment;
            if (start > end) {
              start = end;
              clearInterval(timer);
            }
            setCount(Math.ceil(start));
          }, 10);

          // Disconnect observer after animation starts
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [value]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

export default AnimatedNumber;
