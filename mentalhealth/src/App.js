import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignupPage from "./pages/SignupPage";
import RegisterPage from "./pages/RegisterPage"

function App() {
  return (
      <Router>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/*<Route path="/about" element={<About />} />*/}
            <Route path="/sign-up" element={<SignupPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
