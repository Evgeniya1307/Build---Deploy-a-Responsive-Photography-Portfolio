//получаю список событий
window.addEventListener('scroll',()=> {
document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0); //вступит в силу когда окна увеличиваются по оси y  больше чем на 0
})


//contact buttons
const  textButtons =document.querySelectorAll('.contact__btn');

textButtons.forEach(textButton => {
    let text = textButton.querySelector ('p');

text.innerHTML.split('').map((character, index)=>`<span style="transform: rotate(${index * 12}deg)'>${character}</span>`).join()
})
