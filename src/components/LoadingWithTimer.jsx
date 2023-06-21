import React, { useState, useEffect } from 'react';
import '../timer.css'

const LoadingWithTimer = ({ totalTimeInMinutes }) => {
    const storedEndTime = localStorage.getItem('end-time');
    const storedTotalTimeInMinutes = localStorage.getItem('stored-total-time-in-minutes');
    const currentTime = new Date().getTime();
  
    let endTime = storedEndTime ? new Date(storedEndTime) : new Date(currentTime + totalTimeInMinutes * 60 * 1000);
  
    if (!storedEndTime || storedTotalTimeInMinutes !== totalTimeInMinutes.toString()) {
      endTime = new Date(currentTime + totalTimeInMinutes * 60 * 1000);
      localStorage.setItem('end-time', endTime);
      localStorage.setItem('stored-total-time-in-minutes', totalTimeInMinutes.toString());
    }
  
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = endTime - now;
      return difference > 0 ? difference : 0;
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      const interval = setInterval(() => {
        const timeRemaining = calculateTimeLeft();
        setTimeLeft(timeRemaining);
  
        // Reset the timer and start again if duration ends
        if (timeRemaining === 0) {
          const newEndTime = new Date(new Date().getTime() + totalTimeInMinutes * 60 * 1000);
          localStorage.setItem('end-time', newEndTime);
          endTime = newEndTime;
        }
  
      }, 1000);
  
      return () => clearInterval(interval);
    }, [endTime, totalTimeInMinutes]);
  
    const minutesLeft = Math.floor(timeLeft / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft / 1000) % 60);
    const percentage = ((totalTimeInMinutes * 60 * 1000 - timeLeft) / (totalTimeInMinutes * 60 * 1000)) * 100;
  
    return (
      <div className="timer-container">
        <div className="loading-bar" style={{ width: `${percentage}%` }}></div>
        <div className="time-left">
          {timeLeft > 0 ? `${minutesLeft} min ${secondsLeft} sec left` : "Ready"}
        </div>
      </div>
    );
  };
  
  export default LoadingWithTimer;