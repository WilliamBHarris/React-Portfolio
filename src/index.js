import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'
import Footer from '../src/Components/Footer'
import Nav from './Components/Nav';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />
    <App />
    {/* <Footer /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
