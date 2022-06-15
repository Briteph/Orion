import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './pages/dashboard';
import CandidateTab from './pages/candidate';
import RequisitionTab from './pages/Requisition';
import AddCandidate from './pages/AddCandidate';
import AddRequisition from './pages/AddRequisition';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path='/app/' element={<Dashboard/>}/>
          <Route path='/app/candidate' element={<CandidateTab/>}/>
          <Route path='/app/requisition' element={<RequisitionTab/>}/>
          <Route path='/app/add-candidate' element={<AddCandidate/>}/>
          <Route path='/app/add-requisition' element={<AddRequisition/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
);

