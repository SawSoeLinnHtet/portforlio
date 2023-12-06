import React from "react";
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from "./pages/Projects";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Header />
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
