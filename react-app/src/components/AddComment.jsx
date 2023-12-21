import { Component } from "react";
import { Button, Form } from "react-bootstrap";
import Loading from "./Loading";
import Error from "./Error";

class AddComment extends Component {
  state = {
    error: false,
    loading: false,
    newComment: {
      rate: "0",
      comment: "",
      elementId: this.props.bookId,
    },
  };

  handleChange = (attribute, value) => {
    this.setState({ newComment: { ...this.state.newComment, [attribute]: value } });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      this.setState({ loading: true });
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        body: JSON.stringify(this.state.newComment),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzc4ZDBkOGEyMDAwMThhNDhhMzYiLCJpYXQiOjE3MDMxNjQyNzEsImV4cCI6MTcwNDM3Mzg3MX0.-xrJE0uZNEeau4baxYswcWoCpZ7A2LwzoJUIvyTYX6E",
        },
      });
      if (resp.ok) {
        this.setState({ newComment: { rate: "0", comment: "", elementId: this.props.bookId } });
        console.log(resp.json());
      }
    } catch (err) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <>
        <p className="fw-medium fs-4 mt-3">Nuovo Commento</p>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              min={0}
              max={5}
              value={this.state.newComment.rate}
              onChange={(event) => this.handleChange("rate", event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Commento</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Inserisci il tuo commento"
              value={this.state.newComment.comment}
              onChange={(event) => this.handleChange("comment", event.target.value)}
            />
          </Form.Group>
          <div className="d-flex gap-3 align-items-center">
            <Button variant="outline-primary" type="submit">
              Submit
            </Button>
            {this.state.loading ? <Loading></Loading> : ""}
          </div>
          {this.state.error ? <Error text="Impossibile inserire nuovo commento"></Error> : ""}
        </Form>
      </>
    );
  }
}

export default AddComment;
