let myImages = ["img_1.jpg", "img_10.jpg", "img_11.jpg", "img_12.jpg", "img_13.jpg", "img_14.jpg", "img_15.png", "img_2.jpg", "img_3.jpg","img_4.jpg",
"img_5.jpg",
"img_6.jpg",
"img_7.jpg",
"img_8.jpg",
"img_9.jpg"];

const myImagesRef = document.getElementById("mainImagesContainer");
const dialogRef = document.getElementById("myImagesDialog");
const dialogImage = document.getElementById("dialogImage");


function init() {
renderImage();
};

function renderImage(){

    for(let i = 0; i < myImages.length; i++){
        myImagesRef.innerHTML += `
            <div class="imageWrapper">
                <img 
                    id="img-${i}" 
                    src='./img/images/${myImages[i]}' 
                    alt="Bild ${i}" 
                    onclick="openDialog(${i})"
                >
            </div>`;
    }
}


function openDialog(i) {
    const imageName = myImages[i];
    dialogImage.src = `./img/images/${imageName}`;
    dialogRef.showModal();
}


function closeDialog() {
  dialogRef.close();
}
