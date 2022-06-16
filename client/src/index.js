import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './pages/dashboard';
import CandidateTab from './pages/candidate';
import RequisitionTab from './pages/Requisition';
import AddRequisition from './pages/AddRequisition';
import Requisition from './pages/RequisitionInfo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path='/app' element={<Dashboard/>}/>
          <Route path='/app/candidate' element={<CandidateTab/>}/>
          <Route path='/app/requisition' element={<RequisitionTab/>}/>
          <Route path='/app/requistion/add-requisition' element={<AddRequisition/>}/>
          <Route path='/app/requistion/info' element={<Requisition/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
);

