import FeatureCard from "./FeatureCard";
import JournalIcon from "../Assets/images/journal.png";
import ChatIcon from "../Assets/images/chat.png";
import PlayIcon from "../Assets/images/youtube.png"
import SmileIcon from "../Assets/images/gestures.png"

const FeaturesContainer = () => {
  return (
    <div className="grid grid-cols-1 mt-20 items-center justify-items-center">
      <div
        className="grid grid-cols-4 gap-2 items-center justify-center pl-8 pr-8 shadow-md"
        style={{
          backgroundColor: "#9FD1CD",
          borderRadius: "30px",
          width: "90%",
          height: "50vh",
        }}
      >
        <FeatureCard title={"Journal Space"} img={JournalIcon}/>
        <FeatureCard title={"Mood Track"} img={SmileIcon}/>
        <FeatureCard title={<span dangerouslySetInnerHTML={{__html: "External<br />Resources"}} />} img={PlayIcon} />
        <FeatureCard title={"Chatbot"} img={ChatIcon}/>

      </div>
    </div> 
  );
};

export default FeaturesContainer;
