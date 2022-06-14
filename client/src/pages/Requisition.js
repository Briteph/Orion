import React from 'react';
import ContentNav from '../components/Elements/ContentNav';
import Table from '../components/Tables/PrimaryTable';
import Requisitions from '../components/Tables/Requisitions.json'
import {RequisitionCOLUMNS } from "../components/Tables/Columns"
function RequisitionTab() {
    return (
        <>
            <ContentNav>
                <div className='Table'>
                    <Table entryData={Requisitions} tableColumns={RequisitionCOLUMNS} />
                </div>
            </ContentNav>
        </>
        
    );
}

export default RequisitionTab;