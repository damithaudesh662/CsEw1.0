import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Icon0 from "../Assets/images/scenery1.jpg";
import Icon1 from "../Assets/images/scenery2.jpg";
import Icon2 from "../Assets/images/scenery3.jpg";
import Icon3 from "../Assets/images/scenery4.jpg";
import Icon4 from "../Assets/images/scenery5.jpg";
import MeditationTimer from "../components/MeditationTimer";

const SelfMedPage = () => {
  const [image, setImage] = useState(1);
  const [duration, setDuration] = useState(2);
  const [started, setStarted] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);

  const icons = [Icon0, Icon1, Icon2, Icon3, Icon4];
  const currentIcon = icons[image];

  const handleNext = () => {
    setImage((prevImage) => (prevImage + 1) % icons.length);
  };

  const handlePrev = () => {
    setImage((prevImage) => (prevImage - 1 + icons.length) % icons.length);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleStart = () => {
    setStarted(true);
  };

  const handleTimerFinish = () => {
    setStarted(false);
    setTimerFinished(true);
  };

  if (started) {
    return (
      <MeditationTimer
        duration={duration}
        backgroundImage={currentIcon}
        onTimerFinish={handleTimerFinish}
      />
    );
  }

  return (
    <div className="bg-blue-200 mx-4 my-4 pt-4 pl-4 pr-4 pb-4 rounded-xl">
      <p className="text-black text-center text-2xl pt-8">
        Embark on a journey within yourself. Find stillness, clarity, and peace
        through self-guided meditation. Begin your path to inner harmony now.
      </p>
      <div className="text-4xl mt-20">Choose a Scenery</div>
      <div className="flex justify-center">
        <div className="inline-flex bg-gray-600 items-center justify-center rounded-xl">
          <div className="bg-yellow-200 mx-4 rounded-l-2xl">
            <button onClick={handlePrev} className="mr-1 py-1">
              <ChevronLeftIcon className="w-10 h-10" />
            </button>
          </div>
          <img
            src={currentIcon}
            className="w-96 h-64 object-cover rounded-lg py-4"
          ></img>
          <div className="bg-yellow-200 mx-4 rounded-r-2xl">
            <button onClick={handleNext} className="ml-1 py-1">
              <ChevronRightIcon className="w-10 h-10" />
            </button>
          </div>
        </div>
      </div>
      <div className="text-4xl mt-20">Choose duration</div>
      <div className="flex justify-center mt-4">
        <select
          value={duration}
          onChange={handleDurationChange}
          className="bg-gray-600 text-white py-2 px-4 w-1/4 rounded-xl"
        >
          <option value="2">2 minutes</option>
          <option value="5">5 minutes</option>
          <option value="10">10 minutes</option>
          <option value="15">15 minutes</option>
          <option value="20">20 minutes</option>
        </select>
      </div>
      <div className="flex justify-center pt-12 pb-4 py-4">
        <button
          onClick={handleStart}
          className="px-12 py-2 bg-yellow-200 text-black rounded-xl text-lg font-bold"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default SelfMedPage;
