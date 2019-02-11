const Sequelize = require('sequelize');
const db = require('../database');

const defaultImage = 'https://nuts.com/images/auto/801x534/assets/ab026905bb488ad0.jpg'

module.exports = db.define('candy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      max: 10
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: defaultImage
  }
});
