import React from 'react';
// import { Link } from "react-router-dom";
// import ButtonPrimary from "../components/Elements/buttonPrimary.js"
// import ButtonSecondary from '../components/Elements/buttonSecondary.js';
// import CardKpi from '../components/Cards/CardKPI.js';
import NavBar from '../components/Elements/NavBar';
function Dashboard() {
    return (
        <>
            <NavBar/>
            <div className = "">
                <h1 className="text-3xl font-bold underline">
                    Sample page world!
                </h1>
                {/* <CardKpi header = 'Total Requisition' subHeader= '123' subSpan='21' spanColor='text-green-500'>
                </CardKpi> */}
            </div>
        </>
        
        
    );
}

export default Dashboard;