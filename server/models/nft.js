import Sequelize from "sequelize";

export default class Nft extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        nftHash: {
          type: Sequelize.STRING(255),
        },
        type: {
          type: Sequelize.STRING(255),
        },
        nftImg: {
          type: Sequelize.STRING(255),
        },
        nftName: {
          type: Sequelize.STRING(255),
        },
        nftDataRank: {
          type: Sequelize.STRING(255),
        },
        nftDataType: {
          type: Sequelize.STRING(255),
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        paranoid: false,
        modelName: "Nft",
        tableName: "nft",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.Nft.belongsTo(db.User, {
      foreignKey: "userName",
      targetKey: "userName",
    });
    // db.Nft.belongsTo(db.TradeHistory, {
    //   foreignKey: "tradeHash",
    //   targetKey: "nftHash",
    // });
  }
}
