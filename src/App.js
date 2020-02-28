import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HospitalList from './components/HospitalList';

function App() {
  return (
    <div className="App">
        <Header/>
        <HospitalList/>
    </div>
  );
}

export default App;
