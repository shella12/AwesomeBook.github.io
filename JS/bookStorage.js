export const bookArray = [];
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

export default function (title, author) {
  bookArray.push(new Book(title, author));
}
