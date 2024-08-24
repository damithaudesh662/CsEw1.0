import Signup from "../components/Signup";
import DisplayComponentForTime from "./DisplayComponentForTime";
import Animation from "./Animation";
import Navbar from "../components/Navbar";
import { SignIn } from '@clerk/clerk-react';

const SignupPage = () => {
  return (
    <div>
      <DisplayComponentForTime
        component={<Animation />}
        displayTime={2000} // Time in milliseconds
      />
      <Navbar />
      {/* <Signup /> */}
      
      <div className="flex flex-col items-center justify-center py-32">
        <SignIn />
      </div>
      
    </div>  
  );
};

export default SignupPage;
