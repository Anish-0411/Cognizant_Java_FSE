import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"

import CalculateScore from './components/CalculateScore';

function App() {
  return (
    <div className="App">
     {/* <Home/>
     <About/>
     <Contact/> */}
     <CalculateScore Name="Steve" School="DNV Public School" total={290} goal={3} />
    </div>
  );
}

export default App;
