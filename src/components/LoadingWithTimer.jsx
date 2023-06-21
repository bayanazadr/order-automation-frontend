import React, { useState, useEffect, useRef } from 'react';
import '../timer.css';

const LoadingWithTimer = ({ totalTimeInMinutes }) => {
    const currentTime = new Date().getTime();
    const endTimeRef = useRef(new Date(currentTime + totalTimeInMinutes * 60 * 1000));

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = endTimeRef.current - now;
        return difference > 0 ? difference : 0;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
            const timeRemaining = calculateTimeLeft();
            setTimeLeft(timeRemaining);

            // Reset the timer and start again if duration ends
            if (timeRemaining === 0) {
                endTimeRef.current = new Date(new Date().getTime() + totalTimeInMinutes * 60 * 1000);
            }

        }, 1000);

        return () => clearInterval(interval);
    }, [totalTimeInMinutes]);

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
