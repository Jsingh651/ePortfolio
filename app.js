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

function toggleContrast(){
    contrastToggle = !contrastToggle;
        if (contrastToggle){
    document.body.classList += " dark-theme"
}
else {
    document.body.classList.remove("dark-theme")
}
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
