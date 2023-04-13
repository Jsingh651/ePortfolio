let isModalOpen = false;
let contrastToggle = false;

function moveBackground(event){
const shapes = document.querySelectorAll(".shape")
const x =event.clientX / 20
const y =event.clientY / 20

for (let i =0; i < shapes.length; ++i){
    const isOdd = i % 2 !== 0;
    const oddIntiger = isOdd ? -1: 1
    shapes[i].style.transform = `translate(${x * oddIntiger }px, ${y * oddIntiger }px)`
}

}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
      document.body.classList += " dark-theme";
      localStorage.setItem("contrastToggle", "true");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("contrastToggle", "false");
    }
  }
  
  // On page load, check if dark mode is enabled in local storage
  const isDarkModeEnabled = localStorage.getItem("contrastToggle") === "true";
  if (isDarkModeEnabled) {
    document.body.classList += " dark-theme";
    contrastToggle = true;
  }

function contact(event) {
    event.preventDefault();
     const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
     emailjs
  .sendForm(
        'service_bqx4s2d',
        'template_74y021e',
        event.target,
        'K186n3klexni0hH1l'
   ).then(()=>{
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }) .catch(()=> {
        loading.classList.remove("modal__overlay--visible")
   alert(
    "The email service is temperorly unavailble. Please directly contact me on jangsing02@gmail.ocm"
   )
    })
}

function toggleModal(){
    if (isModalOpen){
        isModalOpen = false
        return document.body.classList.remove('modal--open')

    }
    isModalOpen = true
document.body.classList += " modal--open"
}

const text = "Hi, <span class='orange'>Jang</span> here.";
const typingElement = document.querySelector(".typing");
const typingSpeed = 150; // In milliseconds

function typeText() {
  let htmlText = "";
  let charIndex = 0;

  const typeNextChar = () => {
    if (charIndex < text.length) {
      let currentChar = text[charIndex];
      htmlText += currentChar;
      charIndex++;

      // Check if we are inside an HTML tag
      if (currentChar === "<") {
        while (charIndex < text.length && text[charIndex] !== ">") {
          htmlText += text[charIndex];
          charIndex++;
        }
        htmlText += text[charIndex];
        charIndex++;
      }

      typingElement.innerHTML = htmlText;
      setTimeout(typeNextChar, typingSpeed);
    }
  };

  typeNextChar();
}

document.addEventListener("DOMContentLoaded", typeText);


let angle;

const sketch = p5 => {
  p5.setup = () => {
    let canvas = p5.createCanvas(400, 400);
    canvas.parent('fractal-tree');
    angle = p5.PI / 4;
  };

  p5.draw = () => {
    p5.clear();
    p5.translate(200, p5.height);
    angle = p5.map(p5.sin(p5.frameCount * 0.01), -1, 1, p5.PI / 2, p5.PI / 16); // vary the angle using sin()
    
    if (contrastToggle) { // If dark mode is enabled
      p5.stroke(255); // Set stroke color to white
    } else {
      p5.stroke(0); // Set stroke color to black
    }
    
    branch(90);
  };

  function branch(len) {
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);
    if (len > 4) {
      p5.push();
      p5.rotate(angle);
      branch(len * 0.67);
      p5.pop();
      p5.push();
      p5.rotate(-angle);
      branch(len * 0.67);
      p5.pop();
    }
  }
};

new p5(sketch);