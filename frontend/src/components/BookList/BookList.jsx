import { useDispatch, useSelector } from "react-redux";
import { chengeFavorite, deleteBook } from "../../redux/books/actionCreators";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";

import "./BookList.css";
import { selectTitleFilter } from "../../redux/slices/filterSlice";

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const titleFilter = useSelector(selectTitleFilter);

  const handleChangeFavorite = (id) => {
    return dispatch(chengeFavorite(id));
  };

  const handleDeleteBook = (id) => {
    return dispatch(deleteBook(id));
  };

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());
    return matchesTitle;
  });

  return (
    <div className="app-block book-list">
      <h2>Book list</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {filteredBooks.map((book, i) => (
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
