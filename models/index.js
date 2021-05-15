const User = require('./User');
const Pokemon = require('./Pokemon');
const Painting = require('./Painting');

//Gallery.hasMany(Pokemon, {
  //foreignKey: 'gallery_id',
//});

//Pokemon.belongsTo(Gallery, {
//  foreignKey: 'gallery_id',
//});

module.exports = { User, Pokemon };
