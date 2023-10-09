import logo from "./logo.svg";
import React from "react";
import "./App.css";
import {BrowserRouter, Route , path} from 'react-router-dom'
import Homescreen from "./screens/Homescreen";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import 'antd/dist/antd.css';
import Bookingscreen from "./screens/Bookingscreen";
import Profilescreen from "./screens/Profilescreen";
import Landingscreen from "./screens/Landingscreen";
import Adminscreen from "./screens/Adminscreen";
import Tours from "./components/Tours";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Feedback from "./components/feedback";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      
         <Route path="/" exact component={Landingscreen}/>
         <Route path="/home" exact component={Homescreen}/>
         <Route path="/login" component={Loginscreen}/>
         <Route path="/register" component={Registerscreen}/>
         <Route path="/book/:roomid/:fromdate/:todate" component={Bookingscreen}/>
         <Route path="/profile" component={Profilescreen}/>
         <Route path="/admin" component={Adminscreen}/>
         <Route path="/trip" component={Tours}/>
         <Route path="/gallery" component={Gallery}/>
         <Route path="/services" component={Services}/>
         <Route path="/feedback" component={Feedback}/>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
