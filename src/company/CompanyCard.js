import React from 'react';
import { NavLink } from 'react-router-dom';
import './companyCard.css';

function CompanyCard({ name, description, numEmployees, handle }) {
    const link = `/companies/${handle}`;
    return (
        <div className ='CompanyCard'>
            <NavLink exact to= {link}>
                <div className='card mt-3'>
                    <div className = 'card-body'>
                        <h4 className="card-title">{name}</h4>
                        <div className ='card-name'>{description}</div>
                        <div>Totel Employees: {numEmployees}</div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default CompanyCard;