const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Comments extends Model { }

Comments.init(
    // define columns
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        posts_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        users_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        body: {
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
        modelName: 'comments',
    }
);

module.exports = Comments;
