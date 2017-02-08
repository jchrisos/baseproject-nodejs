"use strict";

var sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    var Movie = sequelize.define("Movie", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            length: 10
        }
    });

    return Movie;
};