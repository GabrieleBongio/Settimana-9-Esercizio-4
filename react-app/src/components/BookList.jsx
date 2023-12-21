import { Component } from "react";
import SingleBook from "./SingleBook";
import { Form, Row, Col, Button } from "react-bootstrap";

class BookList extends Component {
  state = {
    books: this.props.bookArray,
    btns: [
      {
        value: "fantasy",
        active: false,
      },
      {
        value: "history",
        active: false,
      },
      {
        value: "horror",
        active: false,
      },
      {
        value: "romance",
        active: false,
      },
      {
        value: "scifi",
        active: false,
      },
    ],
  };

  handleChange = (event) => {
    this.setState({
      books: this.props.bookArray.filter((book) => book.title.includes(event.target.value)),
      btns: [
        {
          value: "fantasy",
          active: false,
        },
        {
          value: "history",
          active: false,
        },
        {
          value: "horror",
          active: false,
        },
        {
          value: "romance",
          active: false,
        },
        {
          value: "scifi",
          active: false,
        },
      ],
    });
  };

  filterCategory = (event) => {
    this.setState({
      books: this.props.bookArray.filter((book) => book.category === event.target.innerText),
      btns: this.state.btns.map((obj) => {
        if (obj.value === event.target.innerText) {
          obj.active = true;
        } else {
          obj.active = false;
        }
        return obj;
      }),
    });
  };

  render() {
    return (
      <>
        <Form>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Cerca nella LibReact"
                className=" mr-sm-2 mb-2"
                onChange={this.handleChange}
              />
            </Col>
          </Row>
        </Form>
        <div className="d-flex gap-3 mb-4">
          <Button variant={this.state.btns[0].active ? "info" : "outline-info"} onClick={this.filterCategory}>
            fantasy
          </Button>
          <Button variant={this.state.btns[1].active ? "info" : "outline-info"} onClick={this.filterCategory}>
            history
          </Button>
          <Button variant={this.state.btns[2].active ? "info" : "outline-info"} onClick={this.filterCategory}>
            horror
          </Button>
          <Button variant={this.state.btns[3].active ? "info" : "outline-info"} onClick={this.filterCategory}>
            romance
          </Button>
          <Button variant={this.state.btns[4].active ? "info" : "outline-info"} onClick={this.filterCategory}>
            scifi
          </Button>
        </div>
        <p className="fs-5 fw-lighter">trovati {this.state.books.length} libri</p>
        {this.state.books.map((book) => (
          <SingleBook book={book} key={book.category + "-" + book.asin}></SingleBook>
        ))}
      </>
    );
  }
}

export default BookList;
