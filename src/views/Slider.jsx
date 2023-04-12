import React, { useState, useRef, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

const images = [
    {
        id: 1,
        src: "https://picsum.photos/id/1015/400/400",
        alt: "Image 1",
      },
      {
        id: 2,
        src: "https://picsum.photos/id/1025/400/400",
        alt: "Image 2",
      },
      {
        id: 3,
        src: "https://picsum.photos/id/1035/400/400",
        alt: "Image 3",
      },
      {
        id: 4,
        src: "https://picsum.photos/id/1045/400/400",
        alt: "Image 4",
      },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleSwipedLeft = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handleSwipedRight = () => {
    setCurrentIndex((currentIndex + images.length - 1) % images.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipedLeft,
    onSwipedRight: handleSwipedRight,
  });

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000); // Change the duration here (in milliseconds)

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden">
      <div
        ref={sliderRef}
        className="flex w-full h-full transform transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        {...swipeHandlers}
      >
        {images.map((image) => (
          <div key={image.id} className="w-full flex-none">
            <div className="relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-center pb-4">
        {images.map((_, index) => (
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
