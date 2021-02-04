const { Schema, model } = require('mongoose');

const defaultOptions = {
  type: String,
  required: true,
};

const schema = new Schema({
  email: {
    ...defaultOptions,
    unique: true,
  },
  password: defaultOptions,
});

module.exports = model('User', schema);
