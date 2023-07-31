import { useState } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const randomId = Math.round(Math.random() * 9999);
    const updatedBooks = [...books, { id: randomId, title }];
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div className="App">
      {console.log(books)}
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
