const User = require('./User');
const Pokemon = require('./Pokemon');
const Roster = require('./Roster');

Pokemon.hasMany(Roster, {
  foreignKey: 'pokemon_id'
});

User.hasMany(Roster, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Pokemon, Roster };