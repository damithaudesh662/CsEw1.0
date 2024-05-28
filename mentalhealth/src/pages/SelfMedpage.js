import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Icon0 from "../Assets/images/scenery1.jpg";
import Icon1 from "../Assets/images/scenery2.jpg";
import Icon2 from "../Assets/images/scenery3.jpg";
import Icon3 from "../Assets/images/scenery4.jpg";
import Icon4 from "../Assets/images/scenery5.jpg";

const SelfMedPage = () => {
  const [image, setImage] = useState(1);

  const icons = [Icon0, Icon1, Icon2, Icon3, Icon4];
  const currentIcon = icons[image];

  const handleNext = () => {
    setImage((prevImage) => (prevImage + 1) % icons.length);
  };

  const handlePrev = () => {
    setImage((prevImage) => (prevImage - 1 + icons.length) % icons.length);
  };

  return (
    <div className="bg-blue-200 mx-4 my-4 pt-4 pl-4 pr-4 pb-4 rounded-xl">
      <p className="text-black text-center text-2xl pt-8">
        Embark on a journey within yourself. Find stillness, clarity, and peace
        through self-guided meditation. Begin your path to inner harmony now.
      </p>
      <div className="text-4xl mt-20">Choose a Scenery</div>
      <div className="flex justify-center">
        <div className="inline-flex bg-yellow-200 items-center justify-center rounded-xl">
          <button onClick={handlePrev} className="mr-4 pl-4">
            <ChevronLeftIcon className="w-10 h-10" />
          </button>
          <img
            src={currentIcon}
            className="w-96 h-64 object-cover rounded-lg py-4"
          ></img>
          <button onClick={handleNext} className="ml-4 pr-4 mb-4">
            <ChevronRightIcon className="w-10 h-10" />
          </button>
        </div>
      </div>
      <div className="text-4xl mt-20">Choose duration</div>
    </div>
  );
};

export default SelfMedPage;
