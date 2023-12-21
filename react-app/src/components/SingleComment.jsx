import { Component } from "react";
import { Button, ListGroup } from "react-bootstrap";

class SingleComment extends Component {
  state = {
    visible: true,
  };

  deleteComment = async (event) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.comment._id, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzc4ZDBkOGEyMDAwMThhNDhhMzYiLCJpYXQiOjE3MDMxNjQyNzEsImV4cCI6MTcwNDM3Mzg3MX0.-xrJE0uZNEeau4baxYswcWoCpZ7A2LwzoJUIvyTYX6E",
        },
      });
      if (resp.ok) {
        console.log(resp.json());
        this.setState({ visible: false });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <ListGroup.Item className={this.state.visible ? "d-flex justify-content-between align-items-center" : "d-none"}>
        <p className="m-0">
          {this.props.comment.rate} <br></br> {this.props.comment.comment}
        </p>
        <Button variant="danger" onClick={this.deleteComment}>
          Delete
        </Button>
      </ListGroup.Item>
    );
  }
}

export default SingleComment;
