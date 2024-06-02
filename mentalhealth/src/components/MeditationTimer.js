import React, { useEffect, useState } from "react";

const MeditationTimer = ({ duration, backgroundImage }) => {
  const [timeLeft, setTimeLeft] = useState(duration * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center mt-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black bg-opacity-50 text-yellow-200 p-8 rounded-xl">
        <h1 className="text-6xl">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      </div>
    </div>
  );
};

export default MeditationTimer;
