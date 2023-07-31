const BookShow = ({ book, onDelete }) => {
  const handleClick = () => {
    onDelete(book.id);
  };

  return (
    <div className="book-show">
      {book.title}
      <div className="delete" onClick={handleClick}>
        delete
      </div>
    </div>
  );
};

export default BookShow;
