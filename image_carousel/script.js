const images = [
  "https://picsum.photos/id/1015/600/350",
  "https://picsum.photos/id/1016/600/350",
  "https://picsum.photos/id/1025/600/350",
  "https://picsum.photos/id/1035/600/350"
];

const carousel = document.getElementById("carousel");
const carouselImage = document.getElementById("carouselImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.getElementById("dots");

let currentIndex = 0;
let autoSlideInterval;

function showImage(index) {
  currentIndex = index;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  carouselImage.src = images[currentIndex];

  updateDots();
}

function nextImage() {
  showImage(currentIndex + 1);
}

function prevImage() {
  showImage(currentIndex - 1);
}

function createDots() {
  images.forEach((image, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");

    if (index === 0) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
      showImage(index);
      resetAutoSlide();
    });

    dotsContainer.appendChild(dot);
  });
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextImage, 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

function resetAutoSlide() {
  stopAutoSlide();
  startAutoSlide();
}

nextBtn.addEventListener("click", () => {
  nextImage();
  resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
  prevImage();
  resetAutoSlide();
});

carousel.addEventListener("mouseenter", stopAutoSlide);
carousel.addEventListener("mouseleave", startAutoSlide);

createDots();
startAutoSlide();