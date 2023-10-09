import React from "react";
import homeImage from "../screens/p2.jpg";
import moment from "moment"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
AOS.init({
    duration:'2000'
});
function Landingscreen() {
  return (
    <div className="">
      <div className="landing row justify-content-center text-center">
        <div className="col-md-9 my-auto" >
        <img style={{ width: 100, height: 300 }} src={homeImage} />
          <h2 style={{ color: "white", fontSize: "70px" }} data-aos='zoom-in'>Trip & Travel</h2>
          <h1 style={{ color: "white"}} data-aos='zoom-out' >“ we are here to book trip & room for you "</h1>
          <Link to="/login">
             <button className='btn btn-primary'>Signin</button>
          </Link><br></br>
          <Link to="/trip">
             <button className='btn btn-primary'>Get Started</button>
          </Link>
        </div>

        
        
      </div>
     
    </div>
  );
}

export default Landingscreen;
