"use strict";

import Sequelize from "sequelize";
import Config from "../config/config.js";

// import Product from "./product.js";
import Nft from "./nft.js";
import TradeHistory from "./tradeHistory.js";
import User from "./user.js";

const env = process.env.NODE_ENV || "development";
const config = Config[env];
// const db = { Product, User, Cart, Order };
const db = { Nft, User, TradeHistory };

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// Product.init(sequelize);
Nft.init(sequelize);
User.init(sequelize);
TradeHistory.init(sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
// export { Product, User, Cart, Order };
export { User, TradeHistory, Nft };
