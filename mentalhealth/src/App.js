import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/Home"
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    
    <Router>
    <div className="container"> 
    <Navbar />
    <Routes>
        <Route exact path="/" element={<Home />} />
        {/*<Route path="/about" element={<About />} />*/}
        <Route
            path="/sign-up"
            element={<SignupPage />}
  />
    </Routes>
    </div> 
    </Router>
  );
}

export default App;
