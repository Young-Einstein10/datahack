import React, { useState } from 'react';
import { NavContext } from '../contexts/NavContext';
import Navbar from "./Navbar";

const SearchPage = () => {
  const [search, setSearch] = useState('');

  const inputStyles = {
    border: 'none',
    background: 'none',
    color: '#fff',
    borderBottom: '2px solid #F2F0F0',
    borderRadius: '0'
  }

  return (
    <section id="searchPage">
      <Navbar />

      <div className="container d-flex" style={{height: 'calc(100vh - 104px)'}}>
        <div className="row w-100 justify-content-center align-items-center">
          <div className="col-7">
          <div className="form-group"> 
              <input  
                style={inputStyles}
                type="text"
                className="form-control"
                placeholder="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchPage;
