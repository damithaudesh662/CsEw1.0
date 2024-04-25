import SmileyFace from "../Assets/images/smiley-face.gif";
import { Outlet, Link } from "react-router-dom";

const IntroCard = () => {
  return (
    <div className="grid grid-cols-1 mt-32 items-center justify-items-center">
      <div
        className="grid grid-cols-1 justify-items-center items-center shadow-md"
        style={{
          backgroundColor: "#9FD1CD",
          borderRadius: "30px",
          width: "50%",
          height: "50vh",
        }}
      >
        <img
          src={SmileyFace}
          alt="Animated GIF"
          className="object-contain h-40 self-end"
        />
        <p className="text-2xl self-end" style={{ fontFamily: "Bree Serif" }}>
          How are you feeling today?
        </p>
        <div style={{
              backgroundColor: "#FFDC5F",
              borderRadius: "30px",
              width: "20%",
              fontFamily: "Raleway",
              fontWeight: "600",
            }} className="shadow-md text-center">
        <Link to={"/sign-up"}>
          <button
            className="text-black px-4 py-2"
          >
            Get Started
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
