"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: "0001",
          name: "John Doe",
          email: "hogehoge@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "0002",
          name: "fugafuga",
          email: "fugafuga@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { transaction }
    )
    await transaction.commit()
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Uses", null, {})
  },
}
