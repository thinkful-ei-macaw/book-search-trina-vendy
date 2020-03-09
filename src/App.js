import React from "react";
import Search from './components/Search';

class App extends React.Component {

  constructor(){
    super();
     this.state = {
      title: '',
      printType:{
        all:true,
        previewAvailable: false,
        freeGoogleBooks: false
      },
      bookType: {
        any: true,
        books: false,
        magazine: false,
        newspaper: false
      },
      error: null

    }
  }

  componentDidMount() {
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${this.state.title}`;
    const options = {
      method: 'GET',
      headers: {
        // Add your key after Bearer
        "Authorization": "Bearer AIzaSyBvV76QKWtoWpqUmAQKIAFqO1BksIB6b90",
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });

  }
  

  render() {
    return (
      <main>
        <header>
          <h1>Google Book Search</h1>
        </header>

        <section className="search-bar">
          {this.state.title}
          <Search updateState={(title) => {
            this.setState({title})
          }}/>
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
    )
  }
}

export default App;
