var currentImageIndex = 0;
var images = ['../wintercamp.png', '../summer bootcamp.jpg', '../nmtcv2.jpg', '../azure.png', '../big data.png', '../blockchain.png', '../crypto.png', '../industry 4.png', '../nft.png', '../nmtcv3.jpg', '../jpo.jpg', '../angular iot.jpg', '../git iot.jpg', ]; // Ajoutez vos noms d'images ici


function showImage(index) {
  var imageElement = document.getElementById("current-image");
  imageElement.src = images[index];
}

function prevImage() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  showImage(currentImageIndex);
}

function nextImage() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  showImage(currentImageIndex);
}

// Afficher la première image au chargement de la page
showImage(currentImageIndex);









//scroll
window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    var scrollButton = document.getElementById("scrollUpBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  }
  
  function scrollToTop() {
    var currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentScroll - currentScroll / 8);
    }
  }
