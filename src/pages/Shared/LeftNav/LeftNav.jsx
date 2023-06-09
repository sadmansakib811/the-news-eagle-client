// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=> res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h4>All Category</h4>
            {
                // eslint-disable-next-line react/jsx-key, no-unused-vars
                categories.map(category => <p
                key={category.id}
                >
                   
                    <Link to={`/category/${category.id}`} className='text-decoration-none'>{category.name}</Link>
                </p> )
            }
        </div>
    );
};

export default LeftNav;