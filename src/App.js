import './App.css';
import Content from './components/Content.js';
import Hero from './components/Hero.js';
import Integretion from './components/Integretion.js';
import Nav from './components/Nav.js';
import Partners from './components/Partners.js';

function App() {
  return (
    <div className='p-10'>
      <Nav />
      <Hero />
      <Partners />
      <Content />
      <Integretion />
    </div>
  );
}

export default App;
