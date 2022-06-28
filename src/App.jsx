import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experiences from './components/Experiences';
import Footer from './components/Footer';
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
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
