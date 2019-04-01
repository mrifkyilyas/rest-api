'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique:{
        args:true,
        msg:'username sudah digunakan'
      }
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(user, option) {
        let hash = bcrypt.hashSync(user.password,process.env.SALT);
        user.password = hash
      }
    }
  });
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};