const express = require('express');
const router = express.Router();
var moviesJSON = require('../movies.json');

//home
router.get('/', (req, res) => {
    var movies = moviesJSON.movies;
    res.render('home', {
        title: "Star Wars Movies",
        movies: movies
    });
});

// movie_single
router.get('/star_wars_episode/:episode_number?', (req, res) => {
    var episode_number = req.params.episode_number;
    var movies = moviesJSON.movies;

    if(episode_number >= 1 && episode_number <= 6){

        var movie = movies[episode_number - 1];

        var title = movie.title;

        var main_characters = movie.main_characters;

        res.render('movie_single', {
            movies: movies,
            title: title,
            movie: movie,
            main_characters: main_characters
        });
    } else {
        //res.send('<p style="font-family: consolas; text-align:center; position:fixed; top:25%; left:30%; transform: translate(-50%, -50%); font-size: 20px;"><strong>This is not the page you are looking for</strong></p>');
        res.render('notFound', {
            movies: movies,
            title: "This is not the page you are looking for"
        });
    }

    //    res.send('<h1 style="font-family:consolas;">This is the page for episode </h1>'+ req.params.episode_number);
});


//notFound
router.get('*', (req, res) => {
    var movies = moviesJSON.movies;
    res.render('notFound', {
        movies: movies,
        title: "This is not the page you are looking for"
    });
    //res.send('<p style="font-family: consolas; text-align:center; position:fixed; top:25%; left:30%; transform: translate(-50%, -50%); font-size: 20px;"><strong>This is not the page you are looking for</strong></p>');
});

module.exports = router;