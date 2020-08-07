let film = {
    title: 'the Magic Dragon',
    duration: 30,
    stars: ['Jackie', 'Living Sneezes']
};

const favFilm = function (film) {
    console.log(film.title + ' lasts for ' + film.duration + ' minutes.' + ' ' + 'Stars:' + ' ' + film.stars.join(", ") + '.');
};

favFilm(film);




