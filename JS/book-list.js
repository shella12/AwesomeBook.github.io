 book = (title,author)=>{

    console.log(title, author);
    const list= document.createElement('li');
      list.innerHTML = `
      <p>"${title}" by ${author}</p>
    `;
      const removeButton=document.createElement('button');
      removeButton.innerText="Remove";
      removeButton.className="remove-btn";
  
      removeButton.addEventListener('click',()=>{
          list.remove();
  
      });
      list.appendChild(removeButton);
      return list;
  
}

export default book;