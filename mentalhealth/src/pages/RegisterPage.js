import Register from "../components/Register";
import DisplayComponentForTime from "./DisplayComponentForTime";
import Animation from "./Animation";
import Navbar from "../components/Navbar";
import { SignUp } from '@clerk/clerk-react'

const RegisterPage = () => {
  return (
    <div>
      <DisplayComponentForTime
        component={<Animation />}
        displayTime={2000} // Time in milliseconds
      />
      <Navbar />
      {/* <Register /> */}
      <div className="flex flex-col items-center justify-center py-32">
        <SignUp />
      </div>
    </div>
  );
};

export default RegisterPage;
