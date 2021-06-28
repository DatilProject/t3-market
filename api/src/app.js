const express = require('express');
const app = express();
const morgan = require('morgan');
const db = require('./db/db');
const cors = require('cors')
require('dotenv').config();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.options('*', cors());

app.set('port' , process.env.PORT || 3000);

const productRouter = require('./routes/product')

app.use('/api/product', productRouter);

app.get('/', (req, res) =>{
    res.status(200).send("Welcome to Datil-Market API")

})

app.listen(app.get('port') , () => {
	console.log('Server on port' , app.get('port'));
});