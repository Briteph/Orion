import React from 'react';
import { Link } from "react-router-dom";
import ButtonPrimary from "./buttonPrimary.js"
function NavBar() {
    
    return (
        <>
            <div className = "NavBar">
                <h1 className="text-3xl font-bold underline">
                    NavBAr page world!
                </h1>
                <Link to= {"/candidate"}>
                    <ButtonPrimary>
                        CandidateTab
                    </ButtonPrimary>
                </Link>
                <Link to= {"/app"}>
                    <ButtonPrimary>
                        Dashboard
                    </ButtonPrimary>
                </Link>
            </div>

            
        </>

        

    );
}

export default NavBar;