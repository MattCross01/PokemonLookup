const User = require('./User');
const Pokemon = require('./savedPokemon');

User.hasMany(Pokemon, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Pokemon.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Pokemon };