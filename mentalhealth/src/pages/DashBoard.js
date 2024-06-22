import DashBoardContainer from "../components/DashBoardContainer"
import Animation from "./Animation";
import DisplayComponentForTime from "./DisplayComponentForTime";
import Navbar from "../components/Navbar";

//import Icon from "../Assets/images/logo black.png"
import Footer from "../components/Footer";
//import DashBoardContainer from "../components/DashBoardContainer";

const Home = () => {
  return (
    <div className="container">
      <DisplayComponentForTime
        component={<Animation/>}
        displayTime={2000} // Time in milliseconds
      />
      <Navbar />
      <DashBoardContainer/>
      <Footer/>
    </div>
  );
};

export default Home;