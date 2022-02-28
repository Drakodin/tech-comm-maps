import React from 'react';
import './App.css';
import MapOptions from './control/MapOptions';
import DashboardMap from './map/Map';

function App() {
  return (
    <div className="App">
      <div>
        {/* Sample Title */}
        <h2 className="title">Lorem Ipsum</h2>
      </div>
      <DashboardMap/>
      <MapOptions/>
    </div>
  );
}

export default App;
