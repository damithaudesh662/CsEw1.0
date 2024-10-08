import Signup from "../components/Signup";
import DisplayComponentForTime from "./DisplayComponentForTime";
import Animation from "./Animation";
import Navbar from "../components/Navbar";

const SignupPage = () => {
  return (
    <div>
      <DisplayComponentForTime
        component={<Animation />}
        displayTime={2000} // Time in milliseconds
      />
      <Navbar />
      <Signup />
    </div>
  );
};

export default SignupPage;
