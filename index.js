import { default as bookAdd , bookArray } from './JS/bookStorage.js';
import addNewList from './JS/add-books.js';

const form=document.querySelector('.form');

form.addEventListener('submit',(event)=>{
  event.preventDefault();
  const [title,author]= [form.title.value,form.author.value];
  bookAdd(title,author);
  addNewList();
});
