const express = require('express');
const app = express();

require('dotenv').config();

app.set('port' , process.env.PORT || 3000);

app.get('/', (req, res) =>{
    res.status(200).send("Welcome to Datil-Market API")

})

app.listen(app.get('port') , () => {
	console.log('Server on port' , app.get('port'));
});