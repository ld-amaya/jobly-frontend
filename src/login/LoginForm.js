import React, {useState, useContext } from 'react';
import UserContext from '../context/UserContext';
import { useHistory } from 'react-router-dom';
import Alerts from '../alert/Alerts';
function LoginForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [err, setErr] = useState([]);
    const history = useHistory();

    const { login } = useContext(UserContext);

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await login(formData);
        setFormData({
            username: '',
            password: ''
        });
        if (res.success) {
            history.push("/companies");
        } else {
            setErr(res.e);
        }
    }

    return(
        <form onSubmit = {handleSubmit}>
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
            { err.length ? <Alerts messages = {err} type = 'danger' /> : null }
            <div style={{textAlign:'end'}}>
                <button type='submit' className='btn btn-primary btn-sm mt-3'>Submit</button>
            </div>
        </form>
    )
}

export default LoginForm;