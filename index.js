import book from './JS/book-list';

const btn=document.getElementById('btn');
const ulist=document.querySelector('.book-list');
const para=document.querySelector('.book-list p');
const form=document.querySelector('.form');

form.addEventListener('submit',(event)=>{
  event.preventDefault();
  const [title,author]= [form.title.value,form.author.value];
  const list = book(title,author);
 
    ulist.appendChild(list);
    try{
      ulist.removeChild(para);

    }
    catch(e){

    }
    
});
