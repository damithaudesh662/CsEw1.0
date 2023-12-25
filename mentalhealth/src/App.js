import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'

import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel";
import Featurette from './components/Featurette';

function App() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Featurette/>
    </div>
  );
}

export default App;
