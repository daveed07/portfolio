window.onscroll = () => {setSticky()};

const header = document.getElementById('header');
const sticky = header.offsetTop;

const setSticky = () => {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}