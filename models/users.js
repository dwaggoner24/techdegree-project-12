'use strict';
const {sequelize, Model} = require('sequelize');

module.exports = (sequelize) => {
    class Users extends Model {}
    Users.init({

        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        emailAddress: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {sequelize});

    Users.assocate = (models) => {
        Users.hasMany(models.Courses, {
            foreignKey: {
                fieldName: 'userId', 
                allowNull: false,
            },
        });
    };

    return Users;
};