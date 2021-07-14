import React, {useState, useContext} from 'react';
import UserContext from '../context/UserContext';
import { useHistory } from 'react-router-dom';
import Alerts from '../alert/Alerts';

function SignupForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email:''
    });
    const [err, setErr] = useState([]);
    const { registration } = useContext(UserContext);
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await registration(formData)
        setFormData({
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email:''
        })
        if (res.success) {
            history.push('/companies');
        } else {
            setErr(res.e);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label className='col-form-label' htmlFor='username'>Username</label>
                <input
                    onChange={handleChange}
                    className ='form-control'
                    type='text'
                    id='username'
                    name='username'
                    value={formData.username}
                />
            </div>
            <div className='form-group'>
                <label className='col-form-label' htmlFor='password'>Password</label>
                <input
                    onChange={handleChange}
                    className ='form-control'
                    type='password'
                    id='password'
                    name='password'
                    value={formData.password}
                />
            </div>
            <div className='form-group'>
                <label className='col-form-label' htmlFor='firstName'>First Name</label>
                <input
                    onChange={handleChange}
                    className ='form-control'
                    type='text'
                    id='firstName'
                    name='firstName'
                    value={formData.firstName}
                />
            </div>
            <div className='form-group'>
                <label className='col-form-label' htmlFor='lastName'>Last Name</label>
                <input
                    onChange={handleChange}
                    className ='form-control'
                    type='text'
                    id='lastName'
                    name='lastName'
                    value={formData.lastName}
                />
            </div>
            <div className='form-group'>
                <label className='col-form-label' htmlFor='email'>Email</label>
                <input
                    onChange={handleChange}
                    className ='form-control'
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                />
            </div>
            { err.length ? <Alerts messages = {err} type = 'danger' /> : null }
            <div style={{textAlign:'end'}}>
                <button type='submit' className='btn btn-primary btn-sm mt-3'>Submit</button>
            </div>
        </form>
    )
}

export default SignupForm;