const express = require('express');
const app = express();
const morgan = require('morgan');

require('dotenv').config();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('port' , process.env.PORT || 3000);

const authRouter = require('./routes/auth')
const productRouter = require('./routes/product')


app.use('/api/product', productRouter);
app.use('/auth', authRouter);

app.get('/', (req, res) =>{
    res.status(200).send("Welcome to Datil-Market API")

})

app.listen(app.get('port') , () => {
	console.log('Server on port' , app.get('port'));
});