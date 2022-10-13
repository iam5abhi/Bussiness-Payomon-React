import Account from "./Components/Account";
// import AddAccount from "./Components/AddAccount";
// import TransferBank from "./Components/TransferBank";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import PrivateRoute from './routes/PrivateRoutes'
import ForgetPassword from "./Components/ForgetPassword";
// import PaymentProcess from "./Components/PaymentProcess";
import PasswordReset from "./Components/PasswordReset";
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    
    <>
      <Routes>
        <Route path='/' element={<PrivateRoute><Account/></PrivateRoute> }/>
        <Route path='/forgetpassword' element={ < ForgetPassword/> } />
        <Route path='/passwordreset' element={ < PasswordReset/> } />
        <Route path='/signup' element={ < Signup />} />
        <Route path='/login' element={ < Login />} />
      </Routes>
    </>
  );
}

export default App;
