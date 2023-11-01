
import React from "react";
import Navbar from "./components/Navbar";
import "./App.css"
import Banner from "./components/Banner";
import Hotel from "./components/Hotel";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";



function App() {

  
 
  
  return (
    <div style={{maxWidth:"1600px",margin:"auto"}} >

    <Navbar />
    <Banner />
     <Hotel />
     <Feedback />
     <Footer />
    </div>
  );
}

export default App;
