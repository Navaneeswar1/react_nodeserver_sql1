
const { INTEGER, STRING } = require('sequelize');
const { sequelize } = require('./database');

const Users = sequelize.define("users", {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: STRING,
        allowNull: false,
    },
    email: {
        type: STRING,
        allowNull: false,
    },
    
}, { timestamps: false, freezeTableName: false });

module.exports = { Users }