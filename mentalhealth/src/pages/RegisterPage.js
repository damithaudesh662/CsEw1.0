import Register from "../components/Register";
import DisplayComponentForTime from "./DisplayComponentForTime";
import Animation from "./Animation";
import Navbar from "../components/Navbar";

const RegisterPage = () => {
  return (
    <div>
      <DisplayComponentForTime
        component={<Animation />}
        displayTime={2000} // Time in milliseconds
      />
      <Navbar />
      <Register />
    </div>
  );
};

export default RegisterPage;
