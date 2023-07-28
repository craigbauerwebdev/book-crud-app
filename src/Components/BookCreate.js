import { useState } from "react";
import "../styles/bookcreate.scss";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
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
