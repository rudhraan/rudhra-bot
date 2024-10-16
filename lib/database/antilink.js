const config = require("../../config");
const { DataTypes } = require("sequelize");


const al = config.DATABASE.define("antilink", {
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  jid: {
    type: DataTypes.STRING,
    allowNull: false
  },
});
module.exports = al;
