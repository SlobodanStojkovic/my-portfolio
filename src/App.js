import './App.scss';
import { AboutMe } from './Components/AboutMe/AboutMe';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { MyProjects } from './Components/MyProjects/MyProjects';
import { MySkills } from './Components/MySkills/MySkills';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <MySkills />
      <MyProjects />
      <Footer />
    </div>
  );
}

export default App;

