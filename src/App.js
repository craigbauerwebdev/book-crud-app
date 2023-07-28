import { useState } from "react";
import BookCreate from "./Components/BookCreate";

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log("Title: ", title);
  };
  return (
    <div className="App">
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
