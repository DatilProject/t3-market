# Datil Market API
## API
## Prerequisites
* nodejs >= 14.17
* npm >= 6.14.13
* nginx
* postgres

## Install Dependencies
To install dependencies run: 
```console
your-computer:~/t3-market/api$ npm install
```

## Create database
To create database run: 
```console
your-computer:~/t3-market/api$ sudo -u postgres psql postgres
postgres=# CREATE DATABASE datil_market_dev;
postgres=# CREATE ROLE rodemore PASSWORD "rodemore";
```

## Run migrations
```console
your-computer:~/t3-market/api$ npx sequelize-cli db:migrate
```

## Run server in dev mode
Run server in dev mode:
```console
your-computer:~/t3-market/api$ npm run migrations
```

## Deploy server
Run server in dev mode:
```console
your-computer:~/t3-market/api$ pm2 src/app.js --env production
```
