/* eslint-disable */
import book from './bookList.js';
import { bookArray } from './bookStorage.js';

const ulist = document.querySelector('.book-list');

function addNewList() {
  ulist.innerHTML = '';
  bookArray.forEach((element, index) => {
    const list = book(element.title, element.author, index);
    ulist.appendChild(list);
  });
  if (bookArray.length === 0) {
    const para = document.createElement('p');
    para.innerHTML = 'list is empty';
    para.className = 'para';
    ulist.appendChild(para);
  }
}

export default addNewList;