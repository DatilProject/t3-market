const express = require('express');
const app = express();
const morgan = require('morgan');
const db = require('./db/db');
const cors = require('cors')
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(morgan('dev'));
//app.use(bodyParser({limit:'50mb'}));
app.use(bodyParser.json({limit:'200mb'}));
app.use(bodyParser.urlencoded({ extended: true , limit:'200mb'}));

app.use(cors());
app.options('*', cors());
app.use(express.static(__dirname + '/public'));


app.set('port' , process.env.PORT || 3000);

const authRouter = require('./routes/auth')
const productRouter = require('./routes/product')
const categoryRouter = require('./routes/category')
const reportsRouter = require('./routes/reports')
const orderRouter = require('./routes/order')


app.use('/api/product', productRouter);
app.use('/api/category', categoryRouter);
app.use('/api/order', orderRouter);
app.use('/api/reports', reportsRouter);
app.use('/auth', authRouter);

  
app.get('/', (req, res) =>{
    res.status(200).send("Welcome to Datil-Market API")

});

app.listen(app.get('port') , () => {
	console.log('Server on port' , app.get('port'));
});