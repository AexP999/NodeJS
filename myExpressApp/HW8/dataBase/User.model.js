const { Schema, model } = require('mongoose');

const { dataBaseTablesEnum, userRolesEnum } = require('../constants');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    avatar: {
      type: Array
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    age: {
      type: Number,
      default: 15
    },
    password: {
      type: String,
      select: false
    },
    role: {
      type: String,
      enum: Object.values(userRolesEnum),
      default: userRolesEnum.USER
    }
  },
  { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } }
);
module.exports = model(dataBaseTablesEnum.USER, userSchema);
