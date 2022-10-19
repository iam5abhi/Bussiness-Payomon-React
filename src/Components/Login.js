import React, { useState,useEffect } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from './LoadingSpinner';
import axios from 'axios';
import { BaseUrl } from '../BaseUrl';



const Login = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword,setShowPassword]=useState(false)
    const[ragisterData,setragisterData]=useState({
        BusinessEmail:"",
        password:"",
    })
    const eye_Password=()=>{
      if(!showPassword){
        setShowPassword(true)
      }else{
        setShowPassword(false)
      }
    }
    const inputHandler=(event)=>{
        setragisterData((prev)=>({
            ...prev,
            [event.target.name]: event.target.value,
        })) 
    }
    const LoginHandler =()=>{
       setIsLoading(true)
       axios.post(`${BaseUrl.url}/api/signin`,
         ragisterData
       ).then((res)=>{
           window.localStorage.setItem('refreshToken',res.data.token)
           navigate('/')
       }).catch((err)=>{
           console.log(err)
       })
    };

     useEffect(() => {
       let login = localStorage.getItem('refreshToken');
       if(login){
         navigate('/')
       }
     })
  return (
    <div>
        {isLoading ? <LoadingSpinner /> : <>
        <div className="container-fluid">
              <div className="row">
                  <div className="col-sm-2 col-md-4">  
                  </div>
                  <div className="col-sm-8 col-md-4">
                      <form>
                          <div className="section p-4 bg-white border shadow-lg rounded-3">
                              <div className="logo text-center">
                                  <img src="img/payoman-logo1.png" style={{ width: 300 }} />
                              </div>
                                <h5 className="form-heading mb-4 p-2 text-center">Login to payoman</h5>
                              <div className="input-group mb-1">
                                  <input type="text" 
                                  name='BusinessEmail' onChange={inputHandler} 
                                  className="form-control" id="exampleInputNumber1" placeholder="Enter phone number" />
                              </div>                              
                              <div className="input-group mb-1 mt-2">
                                  <input type={showPassword ? "text" : "password"}
                                  name='password' onChange={inputHandler} 
                                  className="form-control" id="exampleInputPassword1" placeholder="Enter password" />
                              </div>
                              <span className="eye">{!showPassword ? <i onClick={eye_Password} className="fa-sharp fa-solid fa-eye-slash"></i> : <i onClick={eye_Password} className="fa-solid fa-eye"></i>}</span>
                              <div className="input-group ">
                                  <div className="col-sm text-end">
                                      <NavLink to="/forgetpassword">Forgot Password?</NavLink>
                                  </div>
                              </div>
                              <br />
                              <button type="button" className="btn btn-primary" 
                               onClick={LoginHandler}
                              > Login&nbsp; <i className="fa-solid fa-right-to-bracket" /></button>
                              <div className="row mt-1">
                                  <div className="col mt-2 pt-2 text-center">
                                      Don't have account?  <NavLink to="/signup" className="bottom-text">Register now</NavLink>
                                  </div>
                              </div>
                        </div>
                    </form>
                </div>
            </div>
         </div>
         </>}
    </div>
  )
}

export default Login
