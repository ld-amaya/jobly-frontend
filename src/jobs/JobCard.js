import React from 'react'

function JobCard({title,salary,equity}) {
    return (<div className="card mt-3">
        <div className='card-body'>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">Salary: {salary}</p>
            <p className="card-text">Equity: {equity}</p>
            <div style={{textAlign:'end'}}>
                <a href="#" class="btn btn-primary btn-sm">Apply</a>
            </div>
        </div>
    </div>)
}

export default JobCard;