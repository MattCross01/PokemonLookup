const sequelize = require('../config/connection');
const seedPokemon = require('./pokemon-seeds');
const seedUser = require('./user-seeds');

const seedAll = async () => {

  try {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

 await seedPokemon();
  console.log('\n----- POKEMON SEEDED -----\n');

let test = await seedUser();

console.log(test)

  console.log('\n----- USERS SEEDED -----\n');

  process.exit(0);
  } catch(err) {
    console.log(err)
  }
};

seedAll();
