import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../store/redditSlice';

const navBar = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector(state => state.reddit.searchTerm);
    const [search, setSearch] = useState(searchTerm);
    
    const handleChange = e => {
        setSearch(e.target.value);
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(setSearchTerm(search));
    };
    
    useEffect(() => {
        setSearch(searchTerm);
    }, [searchTerm]);
    
    return (
        <div className="navbar">
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Search Reddit"
            />
        </form>
        </div>
    );
}

export default navBar;

