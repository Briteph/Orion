import React from 'react';
// import { Link } from "react-router-dom";
// import ButtonPrimary from "../components/Elements/buttonPrimary.js"
// import ButtonSecondary from '../components/Elements/buttonSecondary.js';
import CardKpi from '../components/Cards/CardKPI.js';
import ContentNav from '../components/Elements/ContentNav';
function Dashboard() {
    return (
        <>
            <ContentNav>
                <div className = "">
                    <h1 className="text-3xl font-bold underline">
                        Sample page world!
                    </h1>
                    <CardKpi header = 'Total Requisition' subHeader= '123' subSpan='21' spanColor='text-green-500'>
                    </CardKpi>
                </div>
            </ContentNav>
        </>
        
        
    );
}

export default Dashboard;