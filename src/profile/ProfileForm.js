import React, {useState, useContext} from 'react';
import UserContext from '../context/UserContext';
import Alerts from '../alert/Alerts';
import JoblyApi from '../api';

function ProfileForm() {
    const { user, setUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        username: user.username,
        password: '',
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    });
    const [err, setErr] = useState([]);
    const [isSave, setIsSaved] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password
        }
        const username = formData.username
        try {
            const res = await JoblyApi.updateProfile(username, data);
            setUser(res);
            setIsSaved(true);
            setErr([]);
            setFormData({ ...formData, password: '' });
        } catch (e) {
            setErr(e);
        }
        
    }
    return (
        <form onSubmit ={handleSubmit}>
            <div className='form-group'>
                <label className='col-form-label' htmlFor='username'>Username</label>
                <input
                    onChange={handleChange}
                    className ='form-control-plaintext'
                    type='text'
                    id='username'
                    name='username'
                    value={formData.username}
                    disabled
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
            <div className='form-group'>
                    <label className='col-form-label' htmlFor='password'>Confirm Password to Make Changes</label>
                    <input
                        onChange={handleChange}
                        className ='form-control'
                        type='password'
                        id='password'
                        name='password'
                        value={formData.password}
                    />
            </div>
            {err.length ? <Alerts messages={err} type='danger' /> : null}
            {isSave ? <Alerts messages= {['File successfully saved']} type='success' /> : null }
            <div style={{textAlign:'end'}}>
                <button type='submit' className='btn btn-primary btn-sm mt-3'>Submit</button>
            </div>
        </form>
    )
}

export default ProfileForm;