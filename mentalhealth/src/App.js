import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import SignupPage from "./pages/SignupPage";
import RegisterPage from "./pages/RegisterPage"
import MeditationPage from "./pages/MeditationPage";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
      <Router>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/*<Route path="/about" element={<About />} />*/}
            <Route path="/sign-in" element={<SignupPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/*<Route path='/dashboard' element={<Dashboard />} />*/}
            <Route path="/meditation" element={<MeditationPage />} />
            <Route path='/dashboard' element={<DashBoard />} /> 
          </Routes>
        </div>
      </Router>
  );
}

export default App;
