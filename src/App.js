import React from 'react';
import BaseConverter from './baseConverter/BaseConverter';
import './App.css';

const App = (props) => (
  <div className='main-container'>
    <h1 className='header'>Number Base Converter</h1>
    <BaseConverter />
  </div>
);

export default App;
