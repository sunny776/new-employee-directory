import React from "react";
import '../styles/stylesheet.css';

function search(props) {
  return (
    <form className="search-form">
      <div className="form-group">
        <input 
            id="search"
            className="form-control"
            type="text"
            name="search"
            placeholder="Search for any employees"
            value={props.search}
            onChange={props.handleInputChange}
        />
      </div>
    </form>
  );
}

export default search;
