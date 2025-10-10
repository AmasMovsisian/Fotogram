let imageFilenames = [
  "img_1.jpg",
  "img_2.jpg",
  "img_3.jpg",
  "img_4.jpg",
  "img_5.jpg",
  "img_6.jpg",
  "img_7.jpg",
  "img_8.jpg",
  "img_9.jpg",
  "img_10.jpg",
  "img_11.jpg",
  "img_12.jpg",
  "img_13.jpg",
  "img_14.jpg",
  "img_15.png"
];

let myImages = [
  "Mountain Peak",
  "Dark Leaves",
  "Ocean Sunset",
  "Rocky Lake",
  "Temple Gate",
  "City Lightning",
  "Snowy River",
  "Sunset Hills",
  "Forest Pond",
  "Dew Drops",
  "Lake View",
  "Mountain Village",
  "Lighthouse",
  "Fluffy Cat",
  "Shark Underwater"
];

const myImagesRef = document.getElementById("mainImagesContainer");
const dialogRef = document.getElementById("myImagesDialog");
const dialogImage = document.getElementById("dialogImage");
let myDescriptionRef = document.getElementById("description");
let currentIndex = 0;

function init() {
  renderImage();
}

function renderImage() {
  myImagesRef.innerHTML = "";
  for (let i = 0; i < myImages.length; i++) {
    myImagesRef.innerHTML += HTMLforImages(i);
  }
}

function HTMLforImages(i){
  return `
      <div class="imageWrapper">
        <img 
          id="img-${i}" 
          src='./img/images/${imageFilenames[i]}' 
          alt="${myImages[i]}" 
          onclick="openDialog(${i})"
        >
      </div>`;
}

function renderDescription(i) {
  myDescriptionRef.innerHTML = `<p>${myImages[i]}</p>`;
}

function openDialog(i) {
  currentIndex = i;
  dialogImage.src = `./img/images/${imageFilenames[i]}`;
  renderDescription(i);
  dialogRef.showModal();
}

function closeDialog() {
  dialogRef.close();
}

function nextImage() {
  if (currentIndex < myImages.length - 1) {
    currentIndex = currentIndex + 1;
  } else {
    currentIndex = 0;
  }
  dialogImage.src = `./img/images/${imageFilenames[currentIndex]}`;
  renderDescription(currentIndex);
}

function prevImage() {
  if (currentIndex > 0) {
    currentIndex = currentIndex - 1;
  } else {
    currentIndex = myImages.length - 1;
  }
  dialogImage.src = `./img/images/${imageFilenames[currentIndex]}`;
  renderDescription(currentIndex);
}

function checkForEscapeKey(event) {
  if (event.key == "Escape") {
    closeDialog();
  }
}

function checkBackdropClick(event) {
  if (event.target == dialogRef) {
    closeDialog();
  }
}

document.addEventListener("keydown", checkForEscapeKey);
dialogRef.addEventListener("click", checkBackdropClick);
