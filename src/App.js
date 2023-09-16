import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Views/Home/Home';
import Footer from './Components/Footer/Footer';
import Signin from './Views/Auth/Signin';
import Signup from './Views/Auth/Signup';
import ForgetPassword from './Views/Auth/ForgetPassword';
import Shop from './Views/Shop/Shop';
import Recommended from './Views/Recommended/Recommended';
import ProductDetails from './Views/Product/ProductDetails';
import Basket from './Components/Basket/Basket';
import Added from './Components/Alerts/Added';
import { AuthProvider, RequireAuth} from 'react-auth-kit';
import Profile from './Views/Profile/Profile';
import EditProfile from './Views/Profile/EditProfile';
import CheckoutStep1 from './Views/Checkout/CheckoutStep1';
import CheckoutStep2 from './Views/Checkout/CheckoutStep2';
import CheckoutStep3 from './Views/Checkout/CheckoutStep3';
import Popup from './Components/Alerts/Popup';
import Featured from './Views/Featured/Featured';
import AdminPanel from './Views/Admin/AdminPanel';
import AdminRoute from './AdminRoute';
import AdminProducts from './Views/Admin/AdminProducts';
import NewProduct from './Views/Admin/NewProduct';
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
            <Route element={<RequireAuth loginPath='/Signin'><AdminRoute></AdminRoute></RequireAuth>}>
              <Route path='/admin/dashboard' element={<AdminPanel></AdminPanel>}></Route>
              <Route path='/admin/products' element={<AdminProducts></AdminProducts>}></Route>
              <Route path='/admin/newproduct' element={<NewProduct></NewProduct>}></Route>
            </Route>
          </Routes>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}
