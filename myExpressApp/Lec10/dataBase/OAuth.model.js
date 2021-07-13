const { Schema, model } = require('mongoose');

const dataBaseTablesEnum = require('../constants/database-tables.enum');

const oAuthSchema = new Schema(
  {
    access_Token: {
      type: String,
      required: true
    },

    refresh_Token: {
      type: String,
      required: true
    },

    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: dataBaseTablesEnum.USER
    }
  }, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } }
);

oAuthSchema.pre('findOne', function() {
  this.populate('user');
});

module.exports = model(dataBaseTablesEnum.OAUTH, oAuthSchema);
