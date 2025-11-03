import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Events from "./components/Events";
import ContactUs from "./components/ContactUs";
import Blogs from "./components/Blogs";


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main className="pt-20">
               <Hero />
               <About />
               <Blogs />
               <Events />
               <ContactUs />
               <Footer />
        </main>
        
      </div>
    </Router>
  );
};

export default App;