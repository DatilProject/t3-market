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
app.use(express.static(__dirname + '/public'));

const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('../swagger.json');


app.set('port' , process.env.PORT || 3000);

const authRouter = require('./routes/auth')
const productRouter = require('./routes/product')
const categoryRouter = require('./routes/category')


app.use('/api/product', productRouter);
app.use('/api/category', categoryRouter);
app.use('/auth', authRouter);

app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  );
  
app.get('/', (req, res) =>{
    res.status(200).send("Welcome to Datil-Market API")

});

app.listen(app.get('port') , () => {
	console.log('Server on port' , app.get('port'));
});