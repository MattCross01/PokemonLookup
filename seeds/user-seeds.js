const { User } = require('../models');

const userData = [
   {
     id: 1,
     username: "Winston Nieradka",
     email: "WinstonNieradka@outlook.com",
     password: "pass1233"
   },
   {
    id: 2,
    username: "Matthew Cross",
    email: "mountaindew2141@outlook.com",
    password: "pass3211"
  },
  {
    id: 3,
    username: "Nestor Campaner",
    email: "nestor.dejoya.campaner@gmail.com",
    password: "123passs"
  },
  {
    id: 4,
    username: "Cam Rushing",
    email: "CamRushing@outlook.com",
    password: "pass3211"
  },
]


const seedUser = () => { 
    console.log(User);
    return User.bulkCreate(userData);}

module.exports = seedUser;