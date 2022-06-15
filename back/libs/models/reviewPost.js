const Sequelize = require("sequelize");

module.exports = class ReviewPost extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        content: {
          type: Sequelize.STRING(1000),
          allowNull: false,
        },
        imgUrl: {
          type: Sequelize.STRING(500),
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
        modelName: "ReviewPost",
        tableName: "reviewPost",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.reviewPost.belongsTo(db.user, { foreignKey: 'writer', targetKey: 'userKey' });
    db.reviewPost.belongsTo(db.gallery, { foreignKey: 'storeName', targetKey: 'name' });
  }
};
