'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Players', [
      { name: 'Luca', score: 4, createdAt: 'NOW()', updatedAt: 'NOW()' },
      { name: 'Billy', score: 5, createdAt: 'NOW()', updatedAt: 'NOW()' },
      { name: 'Eva', score: 4, createdAt: 'NOW()', updatedAt: 'NOW()' },
      { name: 'Sanne', score: 5, createdAt: 'NOW()', updatedAt: 'NOW()' },
      { name: 'Sia', score: 4, createdAt: 'NOW()', updatedAt: 'NOW()' },
      { name: 'Iuliia', score: 5, createdAt: 'NOW()', updatedAt: 'NOW()' }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Players', null, {});
  }
};
