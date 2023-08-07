import { useContext } from "react";
import BooksContext from "../Context/books";

function useBooksContext() {
  return useContext(BooksContext);
}

export default useBooksContext;
