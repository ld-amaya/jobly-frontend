import React, { useState, useEffect } from 'react';
import JoblyApi from '../api';
import JobList from './JobList';
import SearchForm from '../searchForm/SearchForm';

function Jobs() {
    const [jobs, setJobs] = useState([]);

    useEffect (() => {
        async function getAllJobs() {
            const j = await JoblyApi.getAllJobs();
            setJobs(j);
        }
        getAllJobs();
    }, [])
    
    async function search(job){
        const j = await JoblyApi.searchJob(job.search);
        setJobs(j);
    }
    

    return (
        <div className='container col-md-8'>
            <SearchForm search={search}/>
            <JobList jobs={jobs} />
        </div>
    )
}

export default Jobs;