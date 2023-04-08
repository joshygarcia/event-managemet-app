const express = require('express');
const app = express();

const db = require('./models');

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000.');
  });
});