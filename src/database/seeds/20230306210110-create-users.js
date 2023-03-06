const bcryptjs = require('bcryptjs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Otávio Luiz',
          email: 'otavio@hotmail.com',
          password_hash: await bcryptjs.hash('otavio123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Mario Autor',
          email: 'mario@hotmail.com',
          password_hash: await bcryptjs.hash('mario123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Talles wind',
          email: 'talles@hotmail.com',
          password_hash: await bcryptjs.hash('talles123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Branda Maria',
          email: 'branda@hotmail.com',
          password_hash: await bcryptjs.hash('branda123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down() {},
};
