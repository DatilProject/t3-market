const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs"); 
const { AccountCredentials} = require("../db/db");


let getUser = async (email)=>{
    accounts = await AccountCredentials.findOne( {where: {email: email}});
    if (accounts){
        account = {email: accounts.email, 
            password: accounts.password,
            id: accounts.id ,
            username: accounts.username};
        return account
    }
    throw new Error({'message':'Invalid email or password'});
}

router.post('/', async (req, res, next) => {
    try {    
        let user = await getUser(req.body.email)
        console.log(user);
        if(bcrypt.compareSync(req.body.password,user.password)){
            let token = jwt.sign( {email: user.email}, "SECRETTOKEN", {expiresIn: '24h'});
            return res.json({auth:true, token:token, user:user});
            
        }
        throw new Error({'message':'Invalid email or password'});
    } catch (err) {
        return res.status(404).json({"auth": false, "message": "Contraseña o correo incorrectos"});
    }
});


module.exports = router;





