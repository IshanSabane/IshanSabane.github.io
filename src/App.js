// import logo from './logo.svg';
import './App.css';
import './components/components.css'
// import Button from 'react-bootstrap/Button';
import Navigation_bar from './components/navigation';
import Intro from './components/intro';
import Workexp from './components/workexp';
import Projects from './components/projects';
import Misc from './components/misc';
import Contact from './components/contact';
// import { Link } from "react-scroll";
import Research from './components/research';
import sample from './components/backgroundnetwork.mp4';
function App() {
  return (

    
    <div className="App">
      <header>
      <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
            integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
            crossorigin="anonymous"
      />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </header>
      <Navigation_bar />

      <Intro  id = 'intro'/>

      <Workexp />
      
      <Research />
      <Projects />

      {/* <Misc id = 'Misc'/> */}
     

      <Contact />

    </div>
  );
}

export default App;
