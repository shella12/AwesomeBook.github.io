export const bookArray = [];
class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
  }
}

export default function (title, author) {
  bookArray.push(new Book(title, author));
  console.log(bookArray);
}
