
const Sequelize = require('sequelize');
const sequelize = new Sequelize('pds2', 'root', '123456',{
  host: 'localhost',
  dialect: 'mysql',
  operatorAliases: false,
  poll: {
       max: 20,
       min: 5,
       acquire: 30000,
       idle: 10000
  },

});

sequelize.sync();
module.exports = sequelize;



