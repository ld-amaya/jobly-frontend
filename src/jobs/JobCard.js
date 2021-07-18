import React, {useContext, useEffect, useState } from 'react';
import useAddCommas from '../hooks/useAddCommas';
import UserContext from '../context/UserContext';

function JobCard({ title, salary, equity, id }) {
    const [value, putComma] = useAddCommas();
    const [applied, setApplied] = useState(false);
    const { apply, hasApplied } = useContext(UserContext);
    // Convert numbers to string with comma 
    useEffect(() => {
        function convertSalary() {
            if (salary > 0) {
                putComma(salary);        
            }    
        }
        convertSalary();
    }, [salary])
    
    // Check if user applied to the job
    useEffect(() => {
        function checkApplication() {
            hasApplied(id) ? setApplied(true) : setApplied(false)    
        }
        checkApplication();
    },[id])
    
    const handleApplication = () => {
        apply(id)
        setApplied(true);
    }

    return (<div className="card mt-3">
        <div className='card-body'>
            <h5 className="card-title" data-testid={id}>{title}</h5>
            <p className="card-text">Salary: {value}</p>
            <p className="card-text">Equity: {equity}</p>
            <div style={{textAlign:'end'}}>
                <button onClick={handleApplication} type='button' className="btn btn-primary btn-sm" disabled = {applied}>
                    {applied ? 'Applied' : 'Apply'}
                </button>
            </div>
        </div>
    </div>)
}

export default JobCard;