import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useLocalStorage from 'use-local-storage';
import { FaToggleOn } from 'react-icons/fa';
import './index.css';

function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }



  return (
  <div className='app' data-theme={theme}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer /> 
      <div className='theme-toggle fixed bottom-0 right-0 p-4'>
        <button onClick={switchTheme} size={20}><p>Theme</p><FaToggleOn size={30} /></button>
        </div> 
</div>
  );
}

export default App;
