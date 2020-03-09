import React from "react";
import Search from './components/Search';
import BookFilter from './components/BookFilter'
class App extends React.Component {

  constructor(){
    super();
     this.state = {
      title: '',
      bookType: '',
      printTye: '',
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
          <Search updateTitle={(title) => {
            this.setState({title})
          }}/>
        </section>
        {this.state.bookType}
        {this.state.printType}
        
        <BookFilter updateFilter={(bookType) => {
          this.setState({bookType})}} 
                    updatePrint={(printType) => {
            this.setState({printType})}}/>

      </main>
    )
  }
}

export default App;
