const mtHood = document.getElementById('mtHood');
const loadingText = document.getElementById('loadingText');

let blurImage = setInterval(blurring, 20);
let blurInt = 80;
let textInt = 0;

function blurring() {
  blurInt--
  mtHood.style.filter = `blur(${blurInt}px)`

  textInt++
  loadingText.innerText = textInt + "%";
  loadingText.style.opacity = (blurInt / 100)

  if (textInt >= 100){
    clearInterval(blurImage);
  }
}

blurring();