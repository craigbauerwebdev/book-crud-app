import { useState, useContext } from "react";
import BooksContext from "../Context/books";
import "../styles/bookcreate.scss";

const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(BooksContext);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <label>Book Title</label>
        <input onChange={handleChange} value={title} />
        <button>Add Book</button>
      </form>
    </div>
  );
};

export default BookCreate;
