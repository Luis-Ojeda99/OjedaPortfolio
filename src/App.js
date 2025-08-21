import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation'
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
    </div>
  );
}

export default App;