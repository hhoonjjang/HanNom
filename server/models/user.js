import Sequelize from "sequelize";

export default class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userAddress: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        userName: {
          type: Sequelize.STRING(255),
          unique: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        paranoid: false,
        modelName: "User",
        tableName: "user",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    // db.User.belongsToMany(db.TradeHistory, {
    //   through: "userHistory",
    //   foreignKey: "userAddress",
    // });
    db.User.hasMany(db.Nft, {
      foreignKey: "userName",
      sourceKey: "userName",
    });
  }
}
