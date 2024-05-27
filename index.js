const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const images = document.querySelectorAll('.teacherImg');

let currentIndex = 0;

function updateImages() {
  images.forEach((img, i) => {
    img.style.transform = `translateX(${(i - currentIndex) * 100}%)`;
  });
}

function prevImg() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImages();
}

function nextImg() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImages();
}

updateImages();

nextBtn.addEventListener('click', nextImg);
prevBtn.addEventListener('click', prevImg);

