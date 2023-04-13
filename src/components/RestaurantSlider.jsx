import React, { useState, useRef, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

const RestaurantSlider = (props) => {
   
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleSwipedLeft = () => {
    setCurrentIndex((currentIndex + 1) % props.images.length);
  };

  const handleSwipedRight = () => {
    setCurrentIndex((currentIndex + props.images.length - 1) % props.images.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipedLeft,
    onSwipedRight: handleSwipedRight,
  });

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % props.images.length);
    }, 5000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [currentIndex]);

  return (
    <div className="mb-10 h-96 bg-red-500 flex flex-col relative w-full max-w-lg mx-auto overflow-hidden">
      <div
        ref={sliderRef}
        className="bg-green-500 flex w-full h-44 transform transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        {...swipeHandlers}
      >
        {props.images.map((image) => (
          <div key={image.id} className="w-full flex-none">
            <div className="relative flex items-center justify-center">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-center pb-20">
        {props.images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 mx-2 rounded-full ${
              currentIndex === index ? 'bg-[#FACD5D]' : 'bg-white'
            }`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default RestaurantSlider;
