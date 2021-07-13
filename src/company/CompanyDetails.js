import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../api'
import JobList from '../jobs/JobList';

function CompanyDetails() {
    const [company, setCompany] = useState(null);
    const { handle } = useParams();
    
    //load api
    useEffect(() => {
        async function getCompanyDetails() {
            const c = await JoblyApi.getCompany(handle);
            setCompany(c);
        }
        getCompanyDetails();
    }, [handle]);

    // handle no company return
    if (!company) return (<p>loading</p>);
    
    return (
        <div className='container col-md-8 mt-5'>
            <h4 class="card-title">{company.name}</h4>
            <div>{company.description}</div>
            <div>Totel Employees: {company.numEmployees}</div>
            <JobList jobs ={company.jobs} />
        </div>
    )
}

export default CompanyDetails;