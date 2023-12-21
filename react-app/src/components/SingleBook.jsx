import { Button, Card, Col } from "react-bootstrap";

import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    return (
      <Col xs={this.state.selected ? 12 : 6} lg={this.state.selected ? 12 : 4} xl={this.state.selected ? 12 : 2}>
        <Card className={this.state.selected ? "border-2 border-danger bg-body-secondary" : ""}>
          <Card.Img variant="top" src={this.props.book.img} onClick={this.toggleSelected} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Button variant="outline-success" className="w-100">
              Scopri di più
            </Button>
            {this.state.selected && <CommentArea bookId={this.props.book.asin}></CommentArea>}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
