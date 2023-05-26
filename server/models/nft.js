import Sequelize from "sequelize";

export default class Nft extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        tokenId: {
          type: Sequelize.INTEGER,
          unique: true,
        },
        nftName: {
          type: Sequelize.STRING(255),
        },
        nftDescription: {
          type: Sequelize.STRING(255),
        },
        nftImg: {
          type: Sequelize.STRING(255),
        },
        state: {
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
      foreignKey: "userAddress",
      targetKey: "userAddress",
    });
    db.Nft.hasMany(db.TradeHistory, {
      foreignKey: "tokenId",
      sourceKey: "tokenId",
    });
  }
}
