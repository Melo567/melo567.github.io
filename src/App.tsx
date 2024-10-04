import './App.css';
import About from './app/about/About';
import Me from './app/me/Me';
import Project from './app/project/Project';
import Techno from './app/techno/Techno';


function App() {
  return (
    <div className="App">
      <About />
  
      <Me />
      <Techno />
      <Project/>
    </div>
  );
}

export default App;
