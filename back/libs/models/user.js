const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userKey: {
          type: Sequelize.STRING(10),
          allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.STRING(100),
          defaultValue: null,
        },
        name: {
          type: Sequelize.STRING(20),
          defaultValue: null,
        },
        userType: {
          type: Sequelize.ENUM("director", "client"),
          defaultValue: "client",
        },
        email: {
          type: Sequelize.STRING(30),
          allowNull: true,
          defaultValue: null,
        },
        mobile: {
          type: Sequelize.STRING(15),
          allowNull: true,
          defaultValue: null,
        },
        birthday: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: "User",
        tableName: "users",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.user.hasOne(db.gallery, { foreignKey: 'userKey', sourceKey: 'userKey' });
  }
};
