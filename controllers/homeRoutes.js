const router = require('express').Router();
const { User, Pokemon } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try{
        const pokemonData = await Pokemon.findAll({
            include: [
                {
                  model: User,
                  attributes: ['name'],
                },
            ],
        });

        const pokemons = pokemonData.map((pokemon) => pokemon.get({ plain: true }));

        res.render('homepage', {
            pokemons,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;