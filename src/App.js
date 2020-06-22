import React from 'react';
import './App.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";
import TourList from './components/TourList';

import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TourList />
    </React.Fragment>
  );
}

export default App;
