import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './style.css';
class Newbook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {


    return (<>


      {this.props.databook.map(elme => {

        return (<Card className='mycard' style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{elme.title}</Card.Title>
            <Card.Text>
              descripcion:{elme.description}
            </Card.Text>
            <Card.Text>
              email:  {elme.email}
            </Card.Text>


            <Button onClick={() => this.props.deletHandel(elme._id)} variant="primary">Delete</Button>
            <Button onClick={() => this.props.updateHandel(elme._id)} variant="primary">Update</Button>
          </Card.Body>
        </Card>)


      })}






    </>);
  }
}

export default Newbook;