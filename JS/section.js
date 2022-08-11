const section = document.body.querySelectorAll('section');
const sectionSwitch = (id) => {
  section.forEach((element, index) => {
    if (index === id) {
      element.classList.add('active');
    }
  });
};

export default sectionSwitch;