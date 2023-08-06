import { useState, useContext } from "react";
import BooksContext from "../Context/books";

const BookEdit = ({ book, onSubmit }) => {
  const [updatedTitle, setUpdatedTitle] = useState(book.title);
  const { editBookById } = useContext(BooksContext);
  const handleChange = (e) => {
    e.preventDefault();
    setUpdatedTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    editBookById(book.id, updatedTitle);
  };
  return (
    <div className="book-edit">
      <form onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
        <input onChange={handleChange} value={updatedTitle} />
        <button>Save</button>
      </form>
    </div>
  );
};

export default BookEdit;
