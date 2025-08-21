import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation'
import About from './components/About';
import Skills from './components/Skills';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <Skills />
      <Stats />
      <Portfolio />
      
    </div>
  );
}

export default App;