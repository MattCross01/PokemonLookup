const User = require('./User');
const Pokemon = require('./Pokemon');
const Roster = require('./Roster');

Roster.hasMany(Pokemon, {
  foreignKey: 'pokemon_id'
});

Roster.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Pokemon, Roster };