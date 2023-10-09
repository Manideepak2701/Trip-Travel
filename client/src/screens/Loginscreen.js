import React, { useState, useEffect } from "react";
import {useDispatch , useSelector} from 'react-redux'
import axios from "axios";
import homeImage from "../screens/p2.jpg";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import Swal from 'sweetalert2'
export default function Loginscreen() {
  

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const[loading, setloading]=useState(false)
    const[error, seterror]=useState(false)
    const[success, setsuccess]=useState(false)    

    const [type, setType]=useState('password');
    const [icon, setIcon]=useState(eyeOff);

    const handleToggle=()=>{    
      if(type==='password'){
        setIcon(eye);      
        setType('text');
      }
      else{
        setIcon(eyeOff);     
        setType('password');
      }
    }  

    useEffect(() => {

          if(localStorage.getItem('currentUser'))
          {
              window.location.href='/'
          }
        
    }, [])

    async function login(){
      const user={
     
        email,
        password
    }
      try {
        setloading(true)
        const result = await (await axios.post('/api/users/login',user)).data
        localStorage.setItem('currentUser',JSON.stringify(result))
        window.location.href='/'
      } catch (error) {
        seterror(true)
        setloading(false)
        console.log(error);
        
      }
    }

    return (
        <div className='login'>
         <div className="row justify-content-center mt-5">
        <div className="col-md-3 mt-5 text-center  shadow-lg p-5 mb-5 bg-info rounded">
        <img style={{ width: 100, height: 100 }} src={homeImage} />
          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Login
          </h2>

          {loading && (<Loader/>)} 
          {error && (<Error error='Invalid Credentials'/>)}
          {success && (<Success success='User Login Successfull'/>)}
          <div>
            <input required type="text" placeholder="email" className="form-control mt-1" value={email} onChange={(e)=>{setemail(e.target.value)}} />
            <input
              type={type}
              placeholder="password"
              className="form-control mt-1"
              value={password}
              required
              onChange={(e)=>{setpassword(e.target.value)}}
            />
            <span onClick={handleToggle}><Icon icon={icon} size={20}/></span><br></br>
            
            <button onClick={login} className="btn-success btn-success mt-3 mb-3 rounded-pill">LOGIN</button>
            <br/>
            <a style={{color:'red'}} href="/register" className="mt-2">CLICK HERE TO REGISTER</a>
          </div>
        </div>
      </div>
        </div>
    )
}