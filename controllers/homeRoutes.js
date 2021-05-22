const router = require('express').Router();
const { User, Pokemon } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try{
        const pokemonData = await Pokemon.findAll({
        });

        const pokemons = pokemonData.map((pokemon) => pokemon.get({ plain: true }));
        console.log(pokemons);

        res.render('homepage', {
            pokemons,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
});



module.exports = router;