
require('dotenv').config();
module.exports = {
    "development": {
      "username": "postgres",
      "password": "rodemore",
      "database": "datil_market_dev",
      "host": "localhost",
      "dialect": "postgres"
    },
    "test": {
        "username": "postgres",
        "password": "rodemore",
        "database": "datil_market",
        "host": "localhost",
        "dialect": "postgres"
      },
    "production": {
        "username": "rodemore",
        "password": "rodemore",
        "database": "datil_market",
        "host": "localhost",
        "dialect": "postgres"
      }
  }