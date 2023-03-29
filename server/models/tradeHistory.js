import Sequelize from "sequelize";

export default class TradeHistory extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        buyerAddress: {
          type: Sequelize.STRING(255),
        },
        sellerAddress: {
          type: Sequelize.STRING(255),
        },
        price: {
          type: Sequelize.INTEGER,
        },
        currency: {
          type: Sequelize.STRING(255),
        },
        transactionHash: {
          type: Sequelize.STRING(255),
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        paranoid: false,
        modelName: "TradeHistory",
        tableName: "tradeHistory",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    // db.TradeHistory.belongsToMany(db.User, {
    //   through: "userHistory",
    //   foreignKey: "tradeHash",
    // });
    db.TradeHistory.belongsTo(db.Nft, {
      foreignKey: "tokenId",
      targetKey: "tokenId",
    });
  }
}
