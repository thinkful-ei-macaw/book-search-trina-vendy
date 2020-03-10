import React from "react";
import App from '../App';

class Search extends React.Component{



    render(){
        return (
            <form onSubmit={this.props.handleSubmit}>
            <label htmlFor="search-field">Search</label>
            <input onChange={this.props.handleChange}
              id="search-field"
              type="text"
              name="search-field"
              placeholder="book title"
              value={this.value}
              required
            />
            <button type="submit">Submit</button>
          </form>
        )
    }
}

export default Search;