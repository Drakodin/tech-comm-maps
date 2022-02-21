import React from 'react';
import './App.css';
import MapOptions from './control/MapOptions';
import DashboardMap from './map/Map';

function App() {
  return (
    <div className="App">
      <DashboardMap/>
      <MapOptions/>
    </div>
  );
}

export default App;
