// require sequelize
const Sequelize = require("sequelize");
// require db instance we made in db.js
const db = require("../db");
//require jwt for authentication
const jwt = require("jsonwebtoken");
//require bcrypt for pword hashing
const bcrypt = require("bcrypt");
//require axios
const axios = require("axios");

//define var for saltrounds
const SALT_ROUNDS = 10;

//User model
const User = db.define("user", {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      // need hashed pword validation
    },
  },
  profileImg: {
    type: Sequelize.STRING,
    defaultValue:
      "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-user-image-179582665.jpg",
  },
});

module.exports = User;

/**
 * instanceMethods
 */
 User.prototype.correctPassword = function(candidatePwd) {
    //we need to compare the plain version to an encrypted version of the password
    return bcrypt.compare(candidatePwd, this.password);
  }
  
  User.prototype.generateToken = function() {
    return jwt.sign({id: this.id}, process.env.JWT)
  }
  
  /**
   * classMethods
   */
  User.authenticate = async function({ username, password }){
      const user = await this.findOne({where: { username }})
      if (!user || !(await user.correctPassword(password))) {
        const error = Error('Incorrect username/password');
        error.status = 401;
        throw error;
      }
      return user.generateToken();
  };
  
  User.findByToken = async function(token) {
    try {
      const {id} = await jwt.verify(token, process.env.JWT)
      const user = User.findByPk(id)
      if (!user) {
        throw 'No user found'
      }
      return user
    } catch (ex) {
      const error = Error('bad token')
      error.status = 401
      throw error
    }
  }
  
  /**
   * hooks
   */
  const hashPassword = async(user) => {
    //in case the password has been changed, we want to encrypt it with bcrypt
    if (user.changed('password')) {
      user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
    }
  }
