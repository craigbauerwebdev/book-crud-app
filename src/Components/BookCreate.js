import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";
import "../styles/bookcreate.scss";

const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { createBook } = useBooksContext();

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
