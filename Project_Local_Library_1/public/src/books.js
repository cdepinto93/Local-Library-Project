function findAuthorById(authors, id) {
  const matchingAuthor = authors.find((author) => author.id === id)
  return matchingAuthor
}

function findBookById(books, id) {
  const matchingBook = books.find((book) => book.id === id)
  return matchingBook
}

function partitionBooksByBorrowedStatus(books) {
  let result = [];
  const borrowed = books.filter((book) => book.borrows[0].returned === false);
  const returned = books.filter((book) => book.borrows[0].returned === true);
  result.push(borrowed, returned);

  return result;
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    const account = accounts.find(account => account.id === borrow.id);
    return {...borrow, ...account};
  }).slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
