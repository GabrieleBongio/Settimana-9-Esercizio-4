import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Error from "./Error";
import Loading from "./Loading";

class CommentArea extends Component {
  state = {
    loading: false,
    error: false,
    comments: [],
  };

  fetchComments = async () => {
    this.setState({ loading: true });
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.bookId, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzc4ZDBkOGEyMDAwMThhNDhhMzYiLCJpYXQiOjE3MDMxNjQyNzEsImV4cCI6MTcwNDM3Mzg3MX0.-xrJE0uZNEeau4baxYswcWoCpZ7A2LwzoJUIvyTYX6E",
        },
      });
      if (resp.ok) {
        const bookComments = await resp.json();
        //console.log("fetched", bookComments);
        this.setState({ comments: bookComments, loading: false });
      }
    } catch (err) {
      this.setState({ error: true, loading: false });
    }
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <div className="mt-3">
        {this.state.loading ? <Loading></Loading> : ""}
        <CommentList comments={this.state.comments}></CommentList>
        {this.state.error ? <Error text="Errore nel caricamento dei dati"></Error> : ""}
        <AddComment bookId={this.props.bookId}></AddComment>
      </div>
    );
  }
}

export default CommentArea;
