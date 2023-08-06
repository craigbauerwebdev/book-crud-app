import { useState } from "react";
import BookEdit from "./BookEdit";
import "../styles/bookshow.scss";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      {!showEdit && <h2>{book.title}</h2>}
      {showEdit && <BookEdit book={book} onSubmit={handleSubmit} />}
      <div className="icons">
        <div className="edit" onClick={handleEditClick}>
          <img alt="edit icon" src="/icons/edit.png" height="30" />
        </div>
        <div className="delete" onClick={handleDeleteClick}>
          <img alt="delete icon" src="/icons/close.png" height="30" />
        </div>
      </div>
    </div>
  );
};

export default BookShow;
