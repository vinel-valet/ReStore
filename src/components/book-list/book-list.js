import './book-list.css'
import BookListItem from "../book-list-item/book-list-item";
import {useDispatch, useSelector} from "react-redux";
import withBookstoreService from "../hoc/with-bookstore-service";
import {booksLoaded, booksRequested, booksError, bookAddedToCart} from "../../actions";
import {useEffect} from "react";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

const BookList = ({books, onAddedToCart, loading}) => {
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          if (loading) {
            return <Spinner/>
          }
          return (
            <li key={book.id}>
              <BookListItem
                book={book}
                onAddedToCart={() => onAddedToCart(book.id)}
              />
            </li>)
        })
      }
    </ul>
  )
}

const BookListContainer = ({bookstoreService}) => {

  const {books, loading, error} = useSelector(state => state);
  const dispatch = useDispatch();
  const onAddedToCart = (id) => dispatch(bookAddedToCart(id));

  useEffect(() => {
    dispatch(booksRequested())
    bookstoreService.getBooks()
      .then((data) => dispatch(booksLoaded(data)))
      .catch((err) => {
        console.log(err);
        return dispatch(booksError(err))
      });
  }, [])

  if (loading) {
    return <Spinner/>
  }
  if (error) {
    return <ErrorIndicator/>
  }
  return (
    <BookList books={books}
              onAddedToCart={(id) => onAddedToCart(id)}
    loading={loading}/>
  )
};

export default withBookstoreService()(BookListContainer);
