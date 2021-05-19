

function getTotalBooksCount(books) {
  let result = books.length
  return result
}

function getTotalAccountsCount(accounts) {
  const result = accounts.length
  return result
}

function getBooksBorrowedCount(books) {
  const borrowedBooks = books.filter((book) => book.borrows.filter(status => !status.returned).length > 0)
  return borrowedBooks.length
}

function getMostCommonGenres(books) {
const commonGenres = {};
  books.forEach((book) => {
    if (commonGenres[book.genre]) {
      commonGenres[book.genre]++;
    } else {
      commonGenres[book.genre] = 1;
    }
  });
  return Object.entries(commonGenres).map(([name, count]) => {
    return {name, count}

  }).sort((a,b)=> b.count - a.count).slice(0, 5);
}

function getMostPopularBooks(books) {
  let result = books.map((book) => {
 return {name:book.title, count:book.borrows.length}
  }).sort((a, b) => a.count < b.count ? 1 : -1).splice(0, 5);
  
  return result;
}
//This is my helper function to sort and splice arrays using the top 5 results
function sortArraysAndSplice(array) {
  return array.sort((a, b) => b.count - a.count).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
    let popAuthor = { 
      name: `${author.name.first} ${author.name.last}`, 
      count: 0
    }
    books.forEach((book) => {
      if (book.authorId === author.id) {
        popAuthor.count += book.borrows.length
      }
    });
    result.push(popAuthor)
  });
  return sortArraysAndSplice(result)
  
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
