import Sequelize from "sequelize";

export default class TradeHistory extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        tradeHash: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        BuyerAddress: {
          type: Sequelize.STRING(255),
        },
        SellerAddress: {
          type: Sequelize.STRING(255),
        },
        Price: {
          type: Sequelize.INTEGER,
        },
        Currency: {
          type: Sequelize.STRING(255),
        },
        fee: {
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
    // db.TradeHistory.hasMany(db.Nft, {
    //   foreignKey: "tradeHash",
    //   sourceKey: "nftHash",
    // });
  }
}
