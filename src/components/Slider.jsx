import React, { useState, useRef, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from "react-router-dom";
const Slider = (props) => {
  const navigate = useNavigate()
  const navigatePromotions = () => navigate('/promotion')
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  const handleSwipedLeft = () => {
    setCurrentIndex((currentIndex + 1) % props.promotions.length);
  };

  const handleSwipedRight = () => {
    setCurrentIndex((currentIndex + props.promotions.length - 1) % props.promotions.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipedLeft,
    onSwipedRight: handleSwipedRight,
  });

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % props.promotions.length);
    }, 5000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [currentIndex]);

  return (
    <div className="h-52 flex flex-col relative w-full max-w-lg mx-auto overflow-hidden">
      <div
        ref={sliderRef}
        className=" flex w-full h-44 transform transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        {...swipeHandlers}
      >
        {props.promotions.map((image) => (
          <div onClick={navigatePromotions} key={image.title} className="w-full flex-none">
            <div className="relative flex flex-col items-start justify-end">
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-40 object-cover rounded-2xl"
              />
              <p className='absolute text-white text-lg font-semibold m-3 '>{image.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="h-1 inset-x-0 flex justify-center">
        {props.promotions.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 mx-2 rounded-full ${
              currentIndex === index ? 'bg-black' : 'bg-gray-400'
            }`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
