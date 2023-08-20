import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Signin from './Signin';
import Signup from './Signup';
export default function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header></Header>
        <Routes>
          <Route exact path='/' Component={Home}></Route>
          <Route path='/Signin' Component={Signin}></Route>
          <Route path='/Signup' Component={Signup}></Route>
          <Route path='/Featured'></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  )
}
