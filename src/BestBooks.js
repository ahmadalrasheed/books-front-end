import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import Booklist from './booklist';

class MyFavoriteBooks extends React.Component {
  constructor(props){
    super(props);
    this.state={
      BooksList:[],
      ShowBooks:0
    }
  }
  componentDidMount=async()=>{
    console.log('helllooooooooo');
    let BookData=await axios.get(`http://localhost:3002/books`);
    console.log(BookData.data);
    this.setState({
      BooksList:BookData.data,
      ShowBooks:1
    })
  }
  render() {
    return(
      <>
      {/* <Jumbotron> */}
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
      {/* </Jumbotron> */}
      <Booklist BooksList={this.state.BooksList} ShowBooks={this.state.ShowBooks} />
      </>
    )
  }
}

export default MyFavoriteBooks;
