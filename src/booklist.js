import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './style.css';


class Booklist extends React.Component {
  render() {
    return (
      <>
        {this.props.ShowBooks && this.props.BooksList.map((book) => {
          return (
            <Card className='card' style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                {book.Decription}
                </Card.Text>
                <Card.Text>
                {book.Email}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );
        })}
        {/* <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card> */}
      </>
    );
  }
}
export default Booklist;
