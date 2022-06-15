const Sequelize = require("sequelize");

module.exports = class Gallery extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(30),
          allowNull: false,
          unique: true,
        },
        address: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        introduction: {
          type: Sequelize.STRING(500),
          allowNull: true,
        },
        imgUrl: {
          type: Sequelize.STRING(500),
          allowNull: true,
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
        modelName: "Gallery",
        tableName: "gallery",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.gallery.belongsTo(db.user, {
      foreignKey: "userKey",
      targetKey: "userKey",
    });
    db.gallery.hasMany(db.reviewPost, {
      foreignKey: "storeName",
      sourceKey: "name",
    });
    db.gallery.hasMany(db.galleryPost, { foreignKey: 'writer', sourceKey: 'name' });
  }
};
