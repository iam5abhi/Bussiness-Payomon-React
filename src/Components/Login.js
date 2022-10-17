import React, { useState,useEffect } from 'react';
import { Navigate, NavLink,useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bars } from  'react-loader-spinner'
import LoadingSpinner from "./LoadingSpinner";
import axios from 'axios';
import { BaseUrl } from '../BaseUrl';



const Login = () => {
    const navigate = useNavigate()
    const [passwordShown, setPasswordShown] = useState(false);
    const[emailErrorMsg,setEmailErrorMsg]=useState('')
    const [isLoading, setIsLoading] = useState(false);
    const[passwordErrorMsg,setPasswordErrorMsg]=useState('')
    const[ragisterData,setragisterData]=useState({
        BusinessEmail:"",
        password:"",
    })
    console.log("ragisterData",ragisterData)
    const LoginHandler =()=>{
       if(!ragisterData.emailaddress || !ragisterData.password ){
           setEmailErrorMsg('BusinessEmail your email address')
           setPasswordErrorMsg('enter your password')
       }
       setIsLoading(true)
       axios.post(`${BaseUrl.url}/api/signin`,
         ragisterData
       ).then((res)=>{
           console.log(res.data)
           window.localStorage.setItem('refreshToken',res.data.token)
           setIsLoading(false)
           navigate('/')
       }).catch((err)=>{
           console.log(err)
       })
        navigate('/')
    };
    const inputHandler=(event)=>{
        setragisterData((prev)=>({
            ...prev,
            [event.target.name]: event.target.value,
        })) 
    }
     useEffect(() => {
       let login = localStorage.getItem('refreshToken');
       if(login){
         navigate('/')
       }
     })
      const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };
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
                              <span className='errorMsg '>{emailErrorMsg}</span >
                              <div className="input-group mb-1 mt-2">
                                  <input type={passwordShown ? "text" : "password"}
                                  name='password' onChange={inputHandler} 
                                  className="form-control" id="exampleInputPassword1" placeholder="Enter password" />
                              </div>
                              <span className='eye'><i className='fas fa-eye' onClick={togglePasswordVisiblity}></i></span>
                              <span className='errorMsg '>{passwordErrorMsg}</span >
                              <div className="input-group ">
                                  <div className="col-sm text-end">
                                      <NavLink to="/forgetpassword">Forgot Password?</NavLink>
                                  </div>
                              </div>
                              <br />
                              <button type="button" className="btn btn-primary" 
                               onClick={LoginHandler} disabled={isLoading}
                              > Login&nbsp; <i className="fa-solid fa-right-to-bracket" /></button>
                              < ToastContainer />
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
