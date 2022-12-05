const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Users extends Model { }

Users.init(
    // define columns
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        username: {
            type: DataTypes.CHAR,
            allowNull: false
        },
        password: {
            type: DataTypes.CHAR,
            allowNull: false
        },
        first_name: {
            type: DataTypes.CHAR,
            allowNull: false
        },
        last_name: {
            type: DataTypes.CHAR,
            allowNull: false
        },
        email: {
            type: DataTypes.CHAR,
            allowNull: false
        },
        created_date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        deleted_flag: {
            type: DataTypes.DATE,
            allowNull: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'users',
    }
);

module.exports = Users;
