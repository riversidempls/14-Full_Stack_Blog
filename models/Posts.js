// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import our database connection from connection.js
const sequelize = require('../config/connection.js');

// Initialize Posts model (table) by extending off Sequelize's Model class
class Posts extends Model { }

// set up fields and rules for Posts model
Posts.init(
    // define columns
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.CHAR,
            allowNull: false
        },
        body: {
            type: DataTypes.CHAR,
            allowNull: false
        },
        users_id: {
            type: DataTypes.INTEGER,
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
        modelName: 'posts',
    }
);

module.exports = Posts;
