import './App.css';

import React from 'react'
import Home from './components/Home';
import { Route, Routes} from 'react-router-dom';
import ViewCatogary from './components/ViewCatogary';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Viewitem from './components/Viewitem';
import Order from './components/Order';


const App = () => {
  return (
    <>
    <Header/>
    <Routes>
     
    <Route  path='/' exact element={<ViewCatogary/>}/>
    <Route path=':categorykey'  element={<ViewCatogary/>}/>
    <Route path=':categorykey/:id' element={<Viewitem/>}/>
    <Route path='/order' element={<Order/>}/>
    </Routes>
    </>
  )
}

export default App