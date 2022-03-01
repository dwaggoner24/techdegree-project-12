'use strict';
const {sequelize, Model} = require('sequelize');

module.exports = (Sequelize) => {
    class Courses extends Model {}
    Courses.init({
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        estimatedTime: {
            type: Sequelize.STRING,
        }, 
        materialsNeeded: {
            type: Sequelize.STRING,
        },
    }, {sequelize});

    Courses.associate = (models) => {
        Courses.belongsTo(models.Users, {
            foreignKey: {
                fieldName: 'userId', 
                allowNull: false,
            },
        });
    };

    return Courses
}