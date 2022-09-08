const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Category extends Model {}
//____: is the column name, the object below the name is the type: DataTypes.STRING instead of VARCHAR
Category.init(
  {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize, //connects to database
    timestamps: false, // creates a column that'll tell you when the column was created.
    freezeTableName: true, // stops sequelize from changing the table name
    underscored: true, // makes the column camel case instead of underscored
    modelName: 'category', // associates this to the category table.
  }
);

module.exports = Category;
