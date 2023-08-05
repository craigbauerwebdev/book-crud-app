import { useContext } from "react";
import BooksContext from "../Context/books";
import BookShow from "./BookShow";

import "../styles/booklist.scss";

const BookList = ({ books, onDelete, onEdit }) => {
  const value = useContext(BooksContext);
  console.log("Book List: ", value);
  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });

  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
