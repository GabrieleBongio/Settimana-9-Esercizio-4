import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import { Container, Row } from "react-bootstrap";
import BookList from "./components/BookList";
import fantasyBooks from "./data/fantasy.json";
import historyBooks from "./data/history.json";
import horrorBooks from "./data/horror.json";
import romanceBooks from "./data/romance.json";
import scifiBooks from "./data/scifi.json";

const booksArray = fantasyBooks.concat(historyBooks).concat(horrorBooks).concat(romanceBooks).concat(scifiBooks);
console.log(booksArray);

function App() {
  return (
    <>
      <MyNav></MyNav>
      <Container className="my-5">
        <Welcome></Welcome>
        <Row className="g-1">
          <BookList bookArray={booksArray}></BookList>
        </Row>
      </Container>
      <MyFooter></MyFooter>
    </>
  );
}

export default App;
