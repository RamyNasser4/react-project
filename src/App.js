import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

export default function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header></Header>
        <Routes>
          <Route path='/' Component={Home}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
