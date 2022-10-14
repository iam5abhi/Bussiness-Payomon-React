import React,{useState} from 'react';
import { BaseUrl } from '../BaseUrl';
import { NavLink,useNavigate } from 'react-router-dom';
import axios from 'axios';
const AddAccount = () => {
  const navigate = useNavigate()
  const [accontDteails,setAccontDteails] = useState({
    AccountholderName: "",
    BankName: "",
    AccountNumber: "",
    IFSC_CODE: ""
  });
  console.log(accontDteails,"accontDteails")
  const AddAccountDetailSubmit= (e)=>{
    e.preventDefault();
    axios({
      method: 'post',
      url: `${BaseUrl.url}/api/addbankdetails`,
      headers:{
        'Authorization':`Bearer ${window.localStorage.getItem('refreshToken')}`
      },
      data:accontDteails
    }).then((res)=>{
      console.log(res.data)
      navigate('/withdraw-to-bank')
    })
    .catch((err)=>{
     console.log(err.message)
    })
  }
    const inputHandler=(event)=>{
        setAccontDteails((prestate) => ({
        ...prestate,
        [event.target.name]: event.target.value,
     }));
    }
  return (
    <div>
       <div className="container-fluid">
        <div className="row">
            <div className="col-sm-2 col-md-4">
            </div>
            <div className="col-sm-8 col-md-4">
            <form>
                <div className="section p-4 bg-white border shadow-lg rounded-3">
                <div className="logo text-center">
                    <img src="img/payoman-logo1.png" style={{width: 300}} />
                </div>
                <h4 className="form-heading my-4  text-center">Add Account</h4>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Business Name</label>
                    <input type="name" onChange={inputHandler} name="AccountholderName" className="form-control" id="exampleFormControlInput1" placeholder=" Enter Business Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Bank Name</label>
                    <input type="text" onChange={inputHandler} name="BankName" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Bank Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Account Number</label>
                    <input type="text" onChange={inputHandler} name="AccountNumber" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="xxxx xxxxx xxxx" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Swift Code</label>
                    <input type="text" onChange={inputHandler} name="IFSC_CODE" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="xxxx xxxxx xxxx" />
                </div>
                <br />
                <button type="submit" className="btn btn-primary mb-3" onClick={AddAccountDetailSubmit}><NavLink to="/withdraw-to-bank" className="text-white">Confirm
                &nbsp;<i className="fa-solid fa-arrow-right" /></NavLink></button>
               </div>
            </form>
         </div>
      </div>
    </div>
 </div>
  )
}
export default AddAccount;
