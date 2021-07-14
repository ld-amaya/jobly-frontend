import React, {useState} from 'react';

function SearchForm({search}) {
    const [formData, setFormData] = useState({
        search:''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(formData => ({ ...formData, [name]: value }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        search(formData);
        setFormData({ search: '' });
    }

    return (
        <form onSubmit ={handleSubmit}>
            <div className='form-group row mt-3'>
                    <div className ='col-md-10'>
                        <input
                            className='form-control'
                            onChange={handleChange}
                            type='text'
                            id='search'
                            name='search'
                            placeholder='Search'
                            value={formData.search}
                        />
                    </div>
                    <button type='submit' className='btn btn-sm btn-primary col-md-2' >Search</button>
                    
                
            </div>
        </form>
    )   
}

export default SearchForm;