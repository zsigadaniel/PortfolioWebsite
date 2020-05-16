//Variables
const button = document.querySelectorAll('.button h3');
const darkTheme = document.querySelector('.darkTheme');
const body = document.querySelector('body');
const introduction = document.querySelector('.introduction');
const links = document.querySelectorAll('.dark-text');
const mainText = document.querySelectorAll('h1');

//Theme controller
darkTheme.addEventListener('click', () => {
    links.forEach(link => {
        link.classList.toggle('dark-text');
        link.classList.toggle('light-text');
    })
    mainText.forEach(mainT => {
        mainT.classList.toggle('light-text');
    })
    body.classList.toggle('dark-body');
    darkTheme.classList.toggle('dark');
    introduction.classList.toggle('darkLines');
    introduction.classList.toggle('introduction');
    if (darkTheme.innerHTML == 'Dark Theme') {
        darkTheme.innerHTML = 'Light Theme'
    } else if (darkTheme.innerHTML == 'Light Theme') {
        darkTheme.innerHTML = 'Dark Theme'
    }

});