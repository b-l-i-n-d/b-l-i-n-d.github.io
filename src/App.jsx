import './App.css';
import About from './components/About';
import Education from './components/Education';
import Experiences from './components/Experiences';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Experiences />
            <Education />
            <Projects />
        </div>
    );
}

export default App;
