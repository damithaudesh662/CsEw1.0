import React, { useEffect, useState } from "react";
import { PauseIcon, PlayIcon, StopIcon } from "@heroicons/react/24/outline";

const MeditationTimer = ({ duration, backgroundImage, onTimerFinish }) => {
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimerFinish();
      return;
    }

    if (isPaused) {
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, isPaused]);

  const handlePauseToggle = () => {
    setIsPaused((prevPaused) => !prevPaused);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center mt-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-yellow-200 p-8 rounded-xl">
        <h1 className="text-6xl">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      </div>
      <div>
        <button onClick={handlePauseToggle}>
          {isPaused ? (
            <PlayIcon className="w-10 h-10 text-yellow-200" />
          ) : (
            <PauseIcon className="w-10 h-10 text-yellow-200" />
          )}
        </button>
        <button onClick={onTimerFinish}>
          <StopIcon className="w-10 h-10 text-yellow-200 ml-4" />
        </button>
      </div>
    </div>
  );
};

export default MeditationTimer;
