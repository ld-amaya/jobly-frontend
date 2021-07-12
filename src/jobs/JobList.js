import React from 'react';
import JobCard from './JobCard';

function JobList({ jobs }) {
    const displayJobs = jobs.map(job => (
        <JobCard
            key={job.id}
            id={job.id}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
        />
        ))
    return (
        <div>
            {displayJobs}
        </div>
    )
}

export default JobList