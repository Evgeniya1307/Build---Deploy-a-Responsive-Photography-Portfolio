//получаю список событий
window.addEventListener('scroll',()=> {
document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY>0) //вступит в силу когда окна увеличиваются по оси y  больше чем на 0
})