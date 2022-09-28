// import React,{useState} from 'react';
// import { NavLink,useNavigate } from 'react-router-dom';
// import { addDoc, collection } from 'firebase/firestore';
// import { db } from './Firebase';
// import axios from 'axios';
// const url="http://localhost:3001/account"

// const AddAccount = () => {
//   const navigate = useNavigate()
//   const [accontDteails,setAccontDteails] = useState({
//     BusinessName: "",
//     BankName: "",
//     AccountNumber: "",
//     SwiftCode: ""
//   });


//   const AddAccountDetailSubmit= (e)=>{
//     e.preventDefault();
//     // try {
//     //     axios.post(url, {
//     //         BusinessName: accontDteails.BusinessName,
//     //         BankName: accontDteails.BankName,
//     //         AccountNumber: accontDteails.AccountNumber,
//     //         SwiftCode: accontDteails.SwiftCode,
//     //     });
//     // } catch (error){
//     //     alert(error,"hello")
//     // }
//     const AccountColl = collection(db, "accounts")
//     addDoc(AccountColl, {accontDteails})
//     .then((res)=>{
//         console.log(res);
//     }).catch((err)=> {
//         console.log(err.message);
//     });   
//     navigate("/transferbank");
//     };


//     const inputHandler=(event)=>{
//         setAccontDteails((prestate) => ({
//         ...prestate,
//         [event.target.name]: event.target.value,
//      }));
//     }
//   return (
//     <div>
//        <div className="container-fluid">
//         <div className="row">
//             <div className="col-sm-2 col-md-4">
//             </div>
//             <div className="col-sm-8 col-md-4">
//             <form>
//                 <div className="section p-4 bg-white border shadow-lg rounded-3">
//                 <div className="logo text-center">
//                     <img src="img/payoman-logo1.png" style={{width: 300}} />
//                 </div>
//                 <h4 className="form-heading my-4  text-center">Add Account</h4>
//                 <div className="mb-3">
//                     <label htmlFor="exampleFormControlInput1" className="form-label">Business Name</label>
//                     <input type="name" onChange={inputHandler} name="BusinessName" className="form-control" id="exampleFormControlInput1" placeholder=" Enter Business Name" />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleFormControlInput1" className="form-label">Bank Name</label>
//                     <input type="text" onChange={inputHandler} name="BankName" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Bank Name" />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleFormControlInput1" className="form-label">Account Number</label>
//                     <input type="text" onChange={inputHandler} name="AccountNumber" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="xxxx xxxxx xxxx" />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleFormControlInput1" className="form-label">Swift Code</label>
//                     <input type="text" onChange={inputHandler} name="SwiftCode" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="xxxx xxxxx xxxx" />
//                 </div>
//                 <br />
//                 <button type="submit" className="btn btn-primary mb-3" onClick={AddAccountDetailSubmit}><NavLink to="/transferbank" className="text-white">Confirm
//                 &nbsp;<i className="fa-solid fa-arrow-right" /></NavLink></button>

//                </div>
//             </form>
//          </div>
//       </div>
//     </div>
//  </div>
//   )
// }

// export default AddAccount;