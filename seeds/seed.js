const sequelize = require('../config/connection');
const { Pokemon } = require('../models');

const pokemonSeedData = require('./pokemonSeedData.json');
const bookSeedData = require('./bookSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const readers = await Reader.bulkCreate(pokemonSeedData, {
    individualHooks: true,
    returning: true,
  });

  for (const { id } of readers) {
    const newCard = await blah.create({
      reader_id: id,
    });
  }

  for (const pokemon of pokemonSeedData) {
    const newPokemon = await Pokemon.create({
      ...pokemon,
      reader_id: readers[Math.floor(Math.random() * readers.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
