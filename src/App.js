import React from 'react';
import './App.css';
import Navbar from './features/Navbar/Navbar';
//import Home from './features/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
