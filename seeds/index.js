const sequelize = require('../config/connection');

const seedPokemon = require('./pokemon-seeds');
//const { User , Pokemon } = require('')
//const seedUser = require('./user-seeds');

const pokemonData = require('./pokemonSeedData.json')
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedPokemon();
  console.log('\n----- POKEMON SEEDED -----\n');

  //await seedUser();
  //console.log('\n----- USERS SEEDED -----\n');

  process.exit(0);
};

seedAll();
