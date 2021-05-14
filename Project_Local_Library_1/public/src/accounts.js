function findAccountById(accounts, id) {
  const matchingAccounts = accounts.find((account) => account.id === id)
  return matchingAccounts
}

function sortAccountsByLastName(accounts) {
  const sortedList = accounts.sort((accountA, accountB) =>
  accountA.name.last.toLowerCase() < accountB.name.last.toLowerCase() ? -1 : 1
  );
  return sortedList;
}

function getTotalNumberOfBorrows(account, books) {
  const borrowCount = books.reduce((acc, element) => {
    element.borrows.forEach((element2) => {
      if (element2.id === account.id) acc++;
    });
    return acc;
    }, 0);
    return borrowCount; 
}

function getBooksPossessedByAccount(account, books, authors) {
  const bookPossessed = books.reduce((acc, element1) => {
    element1.borrows.forEach((element2) => {
      if (element2.id === account.id && !element2.returned) {
        authors.forEach((element3) => {
          if (element3.id ===element1.authorId) {
            element1["author"] = element3;
          }
        });
        acc.push(element1);
      }
    });
    return acc; 
   }, []);
   return bookPossessed
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
