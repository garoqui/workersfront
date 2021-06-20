import React from 'react'
import './App.css';
import GetServices   from './components/services/service.component'
import Service1 from './components/services/service1.component';

function App() {
  return (
    <div className="App">
       <h1>Workers</h1>      
      <GetServices/>
      {/* <Service1/> */}
    </div>
  );
}

export default App;
