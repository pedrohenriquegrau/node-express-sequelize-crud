module.exports = (sequelize, Sequelize) => {
    const Items = sequelize.define("items", {
        name: {
            type: Sequelize.STRING
        },
        Description: {
            type: Sequelize.STRING
        },
        quantily: {
            type: Sequelize.INTEGER
        },
        is_flammble: {
           type: Sequelize.INTEGER
        }
      });

      return Items;
};