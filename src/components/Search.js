import React from "react";
import App from '../App';

class Search extends React.Component{


    handleSubmit = e=>{
        e.preventDefault()
    
      }
    render(){
        return (
            <form>
            <label for="search-field">Search</label>
            <input
              id="search-field"
              type="text"
              name="search-field"
              placeholder="book title"
              required
            />
            <button type="submit" onClick = {()=> this.handleSubmit()}>Submit</button>
          </form>
        )
    }
}

export default Search;