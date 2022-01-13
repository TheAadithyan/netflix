import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './Components/NavBar/NavBar';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <NavBar />
  </React.StrictMode>,
  document.getElementById('root')
);

