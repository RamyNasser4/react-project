import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Signin from './Signin';
import Signup from './Signup';
import ForgetPassword from './ForgetPassword';
import Shop from './Shop';
import Featured from './Featured';
import Recommended from './Recommended';
import ProductDetails from './ProductDetails';
import Basket from './Basket';
import Added from './Added';
import { AuthProvider, RequireAuth } from 'react-auth-kit';
import Profile from './Profile';
import EditProfile from './EditProfile';
import CheckoutStep1 from './CheckoutStep1';
import CheckoutStep2 from './CheckoutStep2';
import CheckoutStep3 from './CheckoutStep3';
import Popup from './Popup';
export default function App() {
  return (
    <AuthProvider
     authType={"cookie"}
     authName={"_auth"}
     cookieSecure={false}
     >
      <BrowserRouter>
        <div className='App'>
          <Header></Header>
          <Basket></Basket>
          <Added></Added>
          <Popup></Popup>
          <Routes>
            <Route exact path='/' Component={Home}></Route>
            <Route path='/Signin' Component={Signin}></Route>
            <Route path='/Signup' Component={Signup}></Route>
            <Route path='/ForgetPassword' Component={ForgetPassword}></Route>
            <Route path='/Shop' Component={Shop}></Route>
            <Route path='/Featured' Component={Featured}></Route>
            <Route path='/Recommended' Component={Recommended}></Route>
            <Route path='/Product/:id' Component={ProductDetails}></Route>
            <Route path='/user' element={<RequireAuth loginPath='/Signin'><Profile></Profile></RequireAuth>}></Route>
            <Route path='/user/edit' element={<RequireAuth loginPath='/Signin'><EditProfile></EditProfile></RequireAuth>}></Route>
            <Route path='/checkout/step1' element={<RequireAuth loginPath='/Signin'><CheckoutStep1></CheckoutStep1></RequireAuth>}></Route>
            <Route path='/checkout/step2' element={<RequireAuth loginPath='/Signin'><CheckoutStep2></CheckoutStep2></RequireAuth>}></Route>
            <Route path='/checkout/step3' element={<RequireAuth loginPath='/Signin'><CheckoutStep3></CheckoutStep3></RequireAuth>}></Route>
          </Routes>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}
