import React from "react";
import App from '../App';

class BookFilter extends React.Component {
  render() {
    return (
      <section>
        <section>
          <label for="book-type">Choose a Type of Book:</label>
          <select id="book-type" onChange={e=>{
                 const bookType =e.target.value;
                 this.props.updateFilter(bookType)
                }}>
            <option selected="selected" value="All">All</option>
            <option value="Preview available">Preview Available</option>
            <option value="Free Google eBooks">Free Google eBooks</option>
          </select>
        </section>
        <section>
          <label for="filter-choice">Print Type</label>
          <select id="print-type" onChange={e=>{
            const printType = e.target.value;
            this.props.updatePrint(printType)
          }}>
            <option value="Any Document">Any Document</option>
            <option value="Books">Books</option>
            <option value="Magazine">Magazine</option>
            <option value="Newspaper">Newspaper</option>
          </select>
        </section>
      </section>
    );
  }
}

export default BookFilter;
