import React, {useEffect} from 'react';
import useAddCommas from '../hooks/useAddCommas';

function JobCard({ title, salary, equity }) {
    const [value, putComma] = useAddCommas();
    
    // Convert numbers to string with comma 
    useEffect(() => {
        function convertSalary() {
            if (salary > 0) {
            putComma(salary);        
            }    
        }
        convertSalary();
    }, [salary])
    
    return (<div className="card mt-3">
        <div className='card-body'>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">Salary: {value}</p>
            <p className="card-text">Equity: {equity}</p>
            <div style={{textAlign:'end'}}>
                <button type='button' className="btn btn-primary btn-sm">Apply</button>
            </div>
        </div>
    </div>)
}

export default JobCard;