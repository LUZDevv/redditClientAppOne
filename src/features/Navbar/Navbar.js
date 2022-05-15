import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../store/redditSlice';

const NavBar = () => {
    const [searchTermLocal, setSearchTermLocal] = useState('');
    const searchTerm = useSelector((state) => state.reddit.searchTerm);
    const dispatch = useDispatch();
  
    const onSearchTermChange = (e) => {
      setSearchTermLocal(e.target.value);
    };
  
    useEffect(() => {
      setSearchTermLocal(searchTerm);
    }, [searchTerm]);
  
    const onSearchTermSubmit = (e) => {
      e.preventDefault();
      dispatch(setSearchTerm(searchTermLocal));
    };
  
    return (
        <header className="navBarContainer">
          <div className="logo">
            <p>
              <strong>Reddit</strong><span>Clientele</span>
            </p>
          </div>
          <form className="search" onSubmit={onSearchTermSubmit}>
            <input
              type="text"
              placeholder="Search"
              value={searchTermLocal}
              onChange={onSearchTermChange}
              aria-label="Search posts"
            />
            <button className="btn btn-primary" type="submit" onClick={onSearchTermSubmit} aria-label="Search">
              SEARCH
            </button>
          </form>
        </header>
      );
    };

export default NavBar;

