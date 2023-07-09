import './App.css';

import React from 'react'
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import ViewCatogary from './components/ViewCatogary';
import Header from './components/Header';
import Sidebar from './components/Sidebar';


const App = () => {
  return (
    <>
    <Header/>
    <Routes>
     
    <Route exact path='/' element={<ViewCatogary/>}/>
    <Route path='viewcatogary/:id' element={<ViewCatogary/>}/>
    
    </Routes>
    </>
  )
}

export default App