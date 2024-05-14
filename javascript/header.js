const toggleButton = document.getElementById('menu-toggle');
const links = document.querySelector('.links');
var menuIsOpen = false;
toggleButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(!menuIsOpen){
        menuIsOpen = true;
        toggleButton.innerHTML = '<span class="material-symbols-outlined">close</span>';
        links.classList.add('open');
    }else{
        menuIsOpen = false;
        toggleButton.innerHTML = '<span class="material-symbols-outlined">menu</span>';
        links.classList.remove('open');
    }
});