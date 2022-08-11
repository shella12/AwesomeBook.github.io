import sectionSwitch from "./section.js";

const pages = (event) =>{

if(event.target.nodeName.toLowerCase() === "a"){
    const elements=document.body.querySelectorAll(".active");
       elements.forEach(element=>{
      element.classList.remove('active');
    });
    if(event.target.id === "0"){
        sectionSwitch(0);
    event.target.classList.add('active');

    }
    else if (event.target.id === "1"){
        sectionSwitch(1);
      event.target.classList.add('active');
    }
    else {
        sectionSwitch(2);
      event.target.classList.add('active');
    }
  }
}

export default pages;