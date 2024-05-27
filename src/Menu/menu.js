const menuBtn = document.getElementById("menubtn");
const Menu = document.getElementById("menu");
const CrossBtn = document.getElementById('Cross-img');

menuBtn.addEventListener('click', () => {

  console.log("hello");
  Menu.style.left = "0";
})
CrossBtn.addEventListener('click', () => {
  Menu.style.left = "-100%";
})
