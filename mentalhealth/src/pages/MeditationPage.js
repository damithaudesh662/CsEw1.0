import DisplayComponentForTime from "./DisplayComponentForTime";
import Animation from "./Animation";
import Footer from "../components/Footer";
import SelfMedPage from "./SelfMedpage";
import VideoMedPage from "./VideoMedPage";
import React, { useState } from "react";
import classNames from "classnames";

const MeditationPage = () => {
  const [selfMedPressed, setSelfMedPressed] = useState(false);
  return (
    <div>
      <DisplayComponentForTime
        component={<Animation />}
        displayTime={2000} // Time in milliseconds
      />
      <div className="container flex items-center justify-between pl-4 pr-4 pt-4 gap-x-4">
        <button
          className={classNames(
            "w-2/5 py-2 px-8 rounded-3xl bg-yellow-300 hover:bg-yellow-400",
            selfMedPressed ? "text-gray-600" : "text-black"
          )}
          onClick={() => setSelfMedPressed(false)}
        >
          Video meditation
        </button>
        <button
          className={classNames(
            "w-2/5 py-2 px-8 rounded-3xl bg-yellow-300 hover:bg-yellow-400",
            selfMedPressed ? "text-black" : "text-gray-600"
          )}
          onClick={() => setSelfMedPressed(true)}
        >
          Self meditation
        </button>
      </div>
      {selfMedPressed ? <SelfMedPage /> : <VideoMedPage />}
      <Footer />
    </div>
  );
};

export default MeditationPage;
