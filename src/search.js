import React from 'react';

const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search task</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search task"
            name="s" 
        />
        <button type="submit">Go!</button>
    </form>
);

export default SearchBar;