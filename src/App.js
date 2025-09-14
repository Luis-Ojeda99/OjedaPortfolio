import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Skills from "./components/Skills";
import Stats from "./components/Stats";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./utils/LanguageContext";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Navigation />
        <Header />
        <About />
        <Skills />
        <Stats />
        <Portfolio />
        <Contact />
        <Footer />
      </LanguageProvider>
    </div>
  );
}

export default App;
