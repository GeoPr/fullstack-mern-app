require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const path = require('path');

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', require('./routes/auth.routes'));

async function start() {
  try {
    await mongoose.connect(config.mongoUri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    app.listen(config.port, () => console.log(`The server has been started`));
  } catch (e) {
    console.log(`Server error: ${e.message}`);
    process.exit(1);
  }
}

start();
