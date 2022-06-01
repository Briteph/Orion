import React from 'react';
import { Link } from "react-router-dom";
import ButtonPrimary from "../components/Elements/buttonPrimary.js"

function Dashboard() {
    return (
        <div className = "">
            <ButtonPrimary>
                <Link to= {"/candidate"}>candidate tab</Link>
            </ButtonPrimary>
            <h1 className="text-3xl font-bold underline">
                Sample page world!
            </h1>
        </div>
    );
}

export default Dashboard;