import { useEffect, useContext } from "react";
import BooksContext from "./Context/books";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";
import "./styles/global.scss";

const App = () => {
  const { fetchBooks } = useContext(BooksContext);

  /* eslint-disable */
  useEffect(() => {
    fetchBooks();
  }, []);
  /* eslint-enable */

  return (
    <div className="App">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
};

export default App;
