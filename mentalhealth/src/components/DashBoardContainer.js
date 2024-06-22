import React from 'react';
import FeatureCard from "./FeatureCard";
import JournalDashIcon from "../Assets/images/journal_dash.png";
import ChatBotIcon from "../Assets/images/chatbot.png";
import PlayIcon from "../Assets/images/youtube.png"
import MeditateIcon from "../Assets/images/meditate.png"
import GamesIcon from "../Assets/images/joystick.png"
import MusicIcon from "../Assets/images/music.png"
import WeaselIcon from "../Assets/images/weasel.png"

const DashBoardContainer = () => {
  return (
    <div className="grid grid-cols-1 mt-32 items-center justify-items-center">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center justify-center p-8 shadow-md"
        style={{
          backgroundColor: "#9FD1CD",
          borderRadius: "30px",
          width: "90%",
          maxWidth: "1200px"
        }}
      >
        <div className="grid col-span-3 grid-cols-2 flex flex-col items-center justify-items-center p-4"
          style={{
            height: "30vh",
            width: "100%",
            backgroundColor: "#D6EADF",
            borderRadius: "30px",
          }}
        >
          <h2 className="text-5xl mt-4" style={{ fontFamily: "Bree Serif" }}>
            Welcome Weasel
          </h2>
          <img className="object-contain h-28 mb-8" src={WeaselIcon} alt="Animated GIF" />
        </div>

        <button className='overflow-wrap: break-word'><FeatureCard title= "Meditate" img={MeditateIcon} /></button>
        <button className='overflow-wrap: break-word'><FeatureCard title="Games for you" img={GamesIcon} /></button>
        <button className='overflow-wrap: break-word'><FeatureCard title="Music for you" img={MusicIcon} /></button>
        <button className='overflow-wrap: break-word'><FeatureCard title="Videos for you" img={PlayIcon} /></button>
        <button className='overflow-wrap: break-word'><FeatureCard title="Your Journal" img={JournalDashIcon} /></button>
        <button className='overflow-wrap: break-word'><FeatureCard title="Chatbot" img={ChatBotIcon} /></button>
      </div>
    </div>
  );
};

export default DashBoardContainer;

