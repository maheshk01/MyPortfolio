import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './Component/About';
import Education from './Component/Education';
import Header from './Component/Header';
import AppRouter from './Router/AppRouter';
import Experience from './Component/Experience';
import Projects from './Component/Projects';
function App() {
  return (
<div>
       <AppRouter/>
      </div>
  );
}

export default App;
