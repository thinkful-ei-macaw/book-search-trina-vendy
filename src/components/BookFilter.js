import React from "react";
import App from '../App';

class BookFilter extends React.Component {
  render() {
    return (
      <section>
        <section>
          <label htmlFor="book-type">Choose a Type of Book:</label>
          <select id="book-type" onChange={e=>{
                 const bookType =e.target.value;
                 this.props.updateFilter(bookType)
                }}>
            <option value="No filter">No filter</option>
            <option value="Partial">partial</option>
            <option value="Full">full</option>
            <option value="Paid Google eBooks">paid-eBooks</option>
            <option value="Free Google eBooks">free-eBooks</option>
            <option value="eBooks">eBooks</option>
          </select>
        </section>
        <section>
          <label htmlFor="filter-choice">Print Type</label>
          <select id="print-type" onChange={e=>{
            const printType = e.target.value;
            this.props.updatePrint(printType)
          }}>
            <option value="all">all</option>
            <option value="Books">Books</option>
            <option value="Magazine">Magazine</option>
          </select>
        </section>
      </section>
    );
  }
}

export default BookFilter;
