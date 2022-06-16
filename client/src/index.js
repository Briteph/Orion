import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './pages/dashboard';
import CandidateTab from './pages/candidate';
import RequisitionTab from './pages/Requisition';
import AddCandidate from './pages/AddCandidate';
import AddRequisition from './pages/AddRequisition';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Candidate from './pages/CandidateProfile';
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path='/app' element={<Dashboard/>}/>
          <Route path='/app/candidate' element={<CandidateTab/>}/>
          <Route path='/app/requisition' element={<RequisitionTab/>}/>
          <Route path='/app/candidate/add-candidate' element={<AddCandidate/>}/>
          <Route path='/app/add-requisition' element={<AddRequisition/>}/>
          <Route path='/app/candidate/profile' element={<Candidate/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
);

