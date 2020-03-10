import React from "react";
import Search from "./components/Search";
import BookFilter from "./components/BookFilter";
import Header from "./components/Header";
import Book from "./components/Book";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      bookType: "No Filter",
      printType: "all",
      error: null,
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.handleFetch(this.title, this.bookType, this.printType);
  }

  handleFetch(title, bookType, printType) {
    const apiKey = "AIzaSyBvV76QKWtoWpqUmAQKIAFqO1BksIB6b90";
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${this.state.title}&filter=${this.state.bookType}&printType=${this.state.printType}&key=${apiKey}`;
    const noFilterURL = `https://www.googleapis.com/books/v1/volumes?q=intitle:${this.state.title}&printType=${this.state.printType}&key=${apiKey}`;
    
    const options = {
      method: "GET",
      headers: {
        // Add your key after Bearer
        // "Authorization": "Bearer AIzaSyBvV76QKWtoWpqUmAQKIAFqO1BksIB6b90",
        "Content-Type": "application/json"
      }
    };
    console.log(url, options);
console.log(this.state.bookType === "No Filter")
    fetch((this.state.bookType === "No Filter" ? noFilterURL : url), options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return res.json();
      })
      .then(data => {
        console.log(data.items);
       
        let bookInfo = data.items.map(x => {
          console.log(x)
          let title = x.volumeInfo.title;
          let id = x.id;
          let price = (x.saleInfo.listPrice ? '$' + x.saleInfo.listPrice.amount:'free');
          let author = (x.volumeInfo.authors === undefined ? 'N/A' : x.volumeInfo.authors[0]);
          let description = x.volumeInfo.description;
          let image = x.volumeInfo.imageLinks.thumbnail;
          console.log(image)
          return { title, id, price, author, description, image };
        });
        console.log(bookInfo);
        this.setState({ data: bookInfo });
      })
      .catch(err => {
        console.log(err)
        this.setState({
          error: err.message
        });
      });
  }

  render() {
    return (
      <main>
        <Header />

        <section className="search-bar">

          <Search
            handleChange={this.handleChange}
            value={this.state.title}
            handleSubmit={this.handleSubmit}
          />
        </section>

        <BookFilter
          updateFilter={bookType => {
            this.setState({ bookType });
          }}
          updatePrint={printType => {
            this.setState({ printType });
          }}
        />
        {this.state.data.map(x => (
          <Book key={x.id} {...x} />
        ))}
      </main>
    );
  }
}

export default App;
