import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation'
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <Skills />
    </div>
  );
}

export default App;