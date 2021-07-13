import React, { useEffect, useState } from 'react';
import CompanyCard from './CompanyCard';
import JoblyApi from '../api';
import SearchForm from '../searchForm/SearchForm';

function Companies() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        async function getCompanies() {
            const c = await JoblyApi.getAllCompany();
            setCompanies(c);
        }
        getCompanies();
    }, []);

    async function search(com) {
        const c = await JoblyApi.searchCompany(com.search);
        setCompanies(c);
    }

    const handleCompanies = companies.map(company => (
            <CompanyCard
                key={company.handle}
                id={company.handle}
                handle={company.handle}
                name={company.name}
                description={company.description}
                numEmployees={company.numEmployees}
                logoURL = {company.logoUrl}
            />
    ));
    
    return (<div className='container col-md-8'>
        <SearchForm search={search}/>
        {handleCompanies}
    </div>)
}

export default Companies;