const router = require('express').Router();
const { Pokemon } = require('../../models');

// GET all pokemon
router.get('/', async (req, res) => {
  try {
    const pokemonData = await Pokemon.findAll({
      include: [{ model: Pokemon }],
    });
    res.status(200).json(pokemonData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single Pokemon
router.get('/:id', async (req, res) => {
  try {
    const pokemonData = await Pokemon.findByPk(req.params.id, {
      include: [{ model: Pokemon }],
    });

    if (!pokemonData) {
      res.status(404).json({ message: 'No Pokemon found with that id!' });
      return;
    }

    res.status(200).json(pokemonData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a Pokemon
router.post('/', async (req, res) => {
  try {
    const locationData = await Pokemon.create({
      pokemon_id: req.body.pokemon_id,
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a Pokemon
router.delete('/:id', async (req, res) => {
  try {
    const pokemonData = await Pokemon.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!pokemonData) {
      res.status(404).json({ message: 'No Pokemon found with that id!' });
      return;
    }

    res.status(200).json(pokemonData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
