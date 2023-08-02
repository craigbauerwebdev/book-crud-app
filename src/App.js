import { useState } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";
import "./styles/global.scss";

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

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="App">
      {console.log(books)}
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
