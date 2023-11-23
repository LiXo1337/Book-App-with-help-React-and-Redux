import { useDispatch, useSelector } from "react-redux";
import { chengeFavorite, deleteBook } from "../../redux/books/actionCreators";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";

import "./BookList.css";

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleChangeFavorite = (id) => {
    return dispatch(chengeFavorite(id));
  };

  const handleDeleteBook = (id) => {
    return dispatch(deleteBook(id));
  };

  return (
    <div className="app-block book-list">
      <h2>Book list</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {book.title} by <strong>{book.author}</strong>
              </div>
              <div className="book-actions">
                {book.isFavorite ? (
                  <BsBookmarkStarFill
                    className="star-icon"
                    onClick={() => handleChangeFavorite(book.id)}
                  />
                ) : (
                  <BsBookmarkStar
                    className="star-icon"
                    onClick={() => handleChangeFavorite(book.id)}
                  />
                )}
                <button onClick={() => handleDeleteBook(book.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
