import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import App from './App';
import Contact from './components/Contact'
import About from './components/About'

ReactDOM.render(
    <Router>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
    </Router>,
  document.getElementById('root')
);

