import React from 'react';
import { BrowserRouter as Router, Route,  Link, Routes } from 'react-router-dom';

import App from '../../App';
import Card from '../Card';
import Single from '../Single';


function Layout() {
  return (
    <Router>
            <Routes>
                <Route path='/' Component={App}/>
                <Route path="/card" Component={Card} />
                <Route path="/singlepage/:id" Component={Single} />
               
            </Routes>
          </Router>
    
  )
}

export default Layout
