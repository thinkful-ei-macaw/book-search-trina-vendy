import React from "react";

class App extends React.Component {
  render() {
    return (
      <main>
        <header>
          <h1>Google Book Search</h1>
        </header>

        <section className="search-bar">
          <form>
            <label for="search-field">Search</label>
            <input
              id="search-field"
              type="text"
              name="search-field"
              placeholder="book title"
              required
            />
          </form>
        </section>
        <section>
          <label for="book-type">Choose a Type of Book:</label>
          <select id="book-type">
            <option value="All">All</option>
            <option value="Preview available">Preview Available</option>
            <option value="Free Google eBooks">Free Google eBooks</option>
          </select>
        </section>
        <section>
        <label for="filter-choice">Print Type</label>
          <select id="print-type">
            <option value="Any Document">Any Document</option>
            <option value="Books">Books</option>
            <option value="Magazine">Magazine</option>
            <option value="Newspaper">Newspaper</option>
          </select>
        </section>
      </main>
    );
  }
}

export default App;
