import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './pages/Dashboard';
import CandidateTab from './pages/Candidate';
import RequisitionTab from './pages/Requisition';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path='/app' element={<Dashboard/>}/>
          <Route path='/candidate' element={<CandidateTab/>}/>
          <Route path='/requistion' element={<RequisitionTab/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
);

