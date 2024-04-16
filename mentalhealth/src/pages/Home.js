import IntroCard from "../components/IntroCard"
import FeaturesContainer from "../components/FeaturesContainer"
import Animation from "./Animation";
import DisplayComponentForTime from "./DisplayComponentForTime";
import Navbar from "../components/Navbar";

import Icon from "../Assets/images/logo black.png"
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="container">
      <DisplayComponentForTime
        component={<Animation/>}
        displayTime={2000} // Time in milliseconds
      />
      <Navbar />
      <IntroCard />
      <div className = "grid grid-cols-2 mt-20">
        <p className="text-2xl mt-10 ml-10 self-start" style={{fontFamily: "Bree Serif"}}>Frankly we know how you feel...</p>
        <div className="flex mt-10">
            <img src={Icon} className='object-contain h-8 self-end'/>
            <p className="text-2xl mt-10 ml-5 self-end" style={{fontFamily: "Bree Serif"}}>offers you</p>
        </div>
      </div>
      <FeaturesContainer/>
      <Footer/>
    </div>
  );
};

export default Home;
