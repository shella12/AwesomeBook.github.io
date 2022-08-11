import { bookArray } from './bookStorage.js';
import addNewList from './add-books.js';

const book = (title, author, index) => {
  const list = document.createElement('li');
  list.innerHTML = `
      <p>"${title}" by ${author}</p>
    `;
  const removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';
  removeButton.id = index;
  removeButton.className = 'remove-btn';
  removeButton.addEventListener('click', (event) => {
    const removeId = parseInt(event.target.id);
    bookArray.splice(removeId, 1);
    addNewList();
    list.remove();
  });
  list.appendChild(removeButton);
  return list;
};

export default book;