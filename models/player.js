'use strict';
module.exports = (sequelize, DataTypes) => {
  var Player = sequelize.define('Player', {
    name: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {tableName: 'Players'});
  Player.associate = function(models) {
    // associations can be defined here
  };
  return Player;
};
