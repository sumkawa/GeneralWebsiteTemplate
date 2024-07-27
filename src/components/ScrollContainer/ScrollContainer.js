import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Import the CSS

const ScrollContainer = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      // Cleanup on component unmount
      return () => {
        if (scroll) scroll.destroy();
      };
    }
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {/* Your content here */}
    </div>
  );
};

export default ScrollContainer;
