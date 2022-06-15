const Sequelize = require("sequelize");

module.exports = class GalleryPost extends Sequelize.Model {
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
        modelName: "GalleryPost",
        tableName: "galleryPost",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.galleryPost.belongsTo(db.gallery, { foreignKey: 'writer', targetKey: 'name' });
  }
};
