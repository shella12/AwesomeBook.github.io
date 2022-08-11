import { default as bookAdd , bookArray } from './JS/bookStorage.js';
import addNewList from './JS/add-books.js';
import updateDate from './JS/date.js';
import pages from './JS/pages.js';



const navBarLinks=document.body.querySelector('.navbar-ulist');
navBarLinks.addEventListener('click',(event)=>{
pages(event);
});

const form=document.body.querySelector('.form');
form.addEventListener('submit',(event)=>{
  event.preventDefault();
  const [title,author]= [form.title.value,form.author.value];
  bookAdd(title,author);
  addNewList();
});

updateDate();
