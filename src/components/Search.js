import React from "react";
import App from '../App';

class Search extends React.Component{



    render(){
        return (
            <form onSubmit={e=>{
              e.preventDefault();
              const title =e.target['search-field'].value;
              this.props.updateTitle(title)
            }}>
            <label for="search-field">Search</label>
            <input
              id="search-field"
              type="text"
              name="search-field"
              placeholder="book title"
              required
            />
            <button type="submit">Submit</button>
          </form>
        )
    }
}

export default Search;