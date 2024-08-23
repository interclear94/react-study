// import { useState } from 'react';
import {Routes, Route } from 'react-router-dom'
import Signup from './components/page/Signup';
import Login from './components/page/Login';

function App() {
  return (
    <Routes>
      <Route path={'/signup'}  element={<Signup />}/>
      <Route path={'/login'}  element={<Login />}/>
    </Routes>
  );
}

export default App;