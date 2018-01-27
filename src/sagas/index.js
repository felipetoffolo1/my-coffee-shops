import { select, call, put, takeEvery, fork, all } from "redux-saga/effects";

// const requestBooks = function*(action) {
//   try {
//     yield put({ type: SET_BOOK_QUERY, query: action.query });

//     const books = yield call(BooksAPI.search, action.query);
//     if (books.error) {
//       yield put({ type: FAILED_BOOKS });
//     } else {
//       //  Merge with books on bookshelf
//       const state = yield select();
//       const bookShelf = state.bookShelf;
//       const mergedBooks = books.map(book => {
//         let foundBook = bookShelf.items.find(
//           bookOnShelf => bookOnShelf.id === book.id
//         );
//         return foundBook ? foundBook : book;
//       });
//       yield put({ type: RECEIVE_BOOKS, books: mergedBooks });
//     }
//   } catch (e) {
//     yield put({ type: FAILED_BOOKS });
//   }
// };

// const requestBookshelf = function*() {
//   try {
//     const bookshelf = yield call(BooksAPI.getAll);
//     bookshelf.error
//       ? yield put({ type: FAILED_BOOKSHELF })
//       : yield put({ type: RECEIVE_BOOKSHELF, bookShelf: bookshelf });
//   } catch (e) {
//     yield put({ type: FAILED_BOOKSHELF });
//   }
// };

// const changeBookshelf = function*(action) {
//   try {
//     const bookshelf = yield call(BooksAPI.update, action.book, action.shelf);
//     bookshelf.error
//       ? yield put({ type: FAILED_BOOKSHELF })
//       : yield put({
//           type: CHANGE_BOOKSHELF,
//           book: action.book,
//           shelf: action.shelf
//         });
//   } catch (e) {
//     yield put({ type: FAILED_BOOKSHELF });
//   }
// };

// export function* watchRequestBooks() {
//   yield takeEvery(REQUEST_BOOKS, requestBooks);
// }
// export function* watchRequestBookshelf() {
//   yield takeEvery(REQUEST_BOOKSHELF, requestBookshelf);
//   yield takeEvery(CHANGE_BOOKSHELF, changeBookshelf);
// }

// export default function* root() {
//   yield all([fork(watchRequestBooks), fork(watchRequestBookshelf)]);
// }
