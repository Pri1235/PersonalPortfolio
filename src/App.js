import './App.css';
import { NavBar } from './components/NavBars';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Project } from './components/Project';
import { Recommendation } from './components/Recommendations';
import { Connect } from './components/Connect';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Project />
      <Recommendation />
      <Connect />

    </div>
  );
}

export default App;
