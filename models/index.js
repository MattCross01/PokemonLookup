const User = require('./User');
const Pokemon = require('./Pokemon');
const Roster = require('./Roster');

// Roster.hasMany(Pokemon, {
//   foreignKey: 'pokemon_id'
// });

User.hasMany(Roster, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Pokemon, Roster };