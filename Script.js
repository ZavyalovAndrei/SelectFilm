const form = document.querySelector('form');
const filmNameField = document.getElementById('name');
const filmGenreField = document.getElementById('genre');
const contentBox = document.querySelector('.content');
function Genre(label, value) {
    this.label = label;
    this.value = value;
}
const genres = [new Genre('', ''), 
                new Genre('Драма', 'drama'), 
                new Genre('Комедия', 'comedy'), 
                new Genre('Фантастика', 'sci-fi')];

genres.forEach((element) => {
let genreForm = document.createElement('option');
    genreForm.setAttribute('label', element.label);
    genreForm.setAttribute('value', element.value);
    genreForm.textContent = element.label;
    filmGenreField.appendChild(genreForm);
});


function createP(elementName, elementGenre) {
    const filmName = document.createElement('p');
    filmName.textContent = elementName;
    contentBox.appendChild(filmName);
    const filmGenre = document.createElement('p');
    filmGenre.textContent = elementGenre;
    contentBox.appendChild(filmGenre);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(filmNameField.value && genres[filmGenreField.selectedIndex].label) {
        const nameString= 'Название фильма: ' + filmNameField.value;
        const genreString = 'Жанр: ' + genres[filmGenreField.selectedIndex].label;
        createP(nameString, genreString);
        console.log(filmGenreField.value);
        form.reset()
    }
})
