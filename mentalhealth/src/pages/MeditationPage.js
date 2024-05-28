import DisplayComponentForTime from "./DisplayComponentForTime";
import Animation from "./Animation";
import Footer from "../components/Footer";
import SelfMedPage from "./SelfMedpage";
import VideoMedPage from "./VideoMedPage";
import React, { useState } from "react";

const MeditationPage = () => {
  const [selfMedPressed, setsSelfMedPressed] = useState(false);
  return (
    <div>
      {/* <DisplayComponentForTime
        component={<Animation />}
        displayTime={2000} // Time in milliseconds
      /> */}
      <div className="container flex items-center justify-between pl-4 pr-4 pt-4 gap-x-4">
        <button
          className="w-2/5 bg-yellow-300 hover:bg-yellow-400 text-black py-2 px-8 rounded-3xl"
          onClick={() => setsSelfMedPressed(false)}
        >
          Video meditation
        </button>
        <button
          className="w-2/5 bg-yellow-300 hover:bg-yellow-400 text-black py-2 px-8 rounded-3xl"
          onClick={() => setsSelfMedPressed(true)}
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
