const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs"); 
const { AccountCredentials, Commerce, Client} = require("../db/db");
const commerce = require('../db/models/commerce');


let getCommerce = async (email)=>{
    account = await AccountCredentials.findOne( {where: {email: email}, include: Commerce});
    if (account && account["commerce"]){
        let accountStr = JSON.stringify(account)
        let accountObj = JSON.parse(accountStr)
        return accountObj;
    }
    throw new Error({'message':'Invalid email or password'});
}
let getUser = async (email)=>{
    account = await AccountCredentials.findOne( {where: {email: email}, include: Client});
    if (account && account["client"]){
        let accountStr = JSON.stringify(account)
        let accountObj = JSON.parse(accountStr)
        return accountObj;
    }
    throw new Error({'message':'Invalid email or password'});
}

router.post('/commerce', async (req, res, next) => {
    try {    
        let user = await getCommerce(req.body.email)
        if(bcrypt.compareSync(req.body.password,user.password)){
            delete user["password"]
            delete user["createdAt"]
            delete user["updatedAt"]
            let token = jwt.sign( {email: user.email}, "SECRETTOKEN", {expiresIn: '24h'});
            return res.json({auth:true, token:token, user:user});  
        }
        throw new Error({'message':'Invalid email or password'});
    } catch (err) {
        console.log(err);
        return res.status(404).json({"auth": false, "message": "Contraseña o correo incorrectos"});
    }
});


router.post('/client', async (req, res, next) => {
    try {    
        let user = await getUser(req.body.email)
        if(bcrypt.compareSync(req.body.password,user.password)){
            delete user["password"]
            delete user["createdAt"]
            delete user["updatedAt"]
            let token = jwt.sign( {email: user.email}, "SECRETTOKEN", {expiresIn: '24h'});
            return res.json({auth:true, token:token, user:user});  
        }
        throw new Error({'message':'Invalid email or password'});
    } catch (err) {
        console.log(err);
        return res.status(404).json({"auth": false, "message": "Contraseña o correo incorrectos"});
    }
});

router.post('/client/createaccount', async (req, res, next) => {
    req.body.password = bcrypt.hashSync(req.body.password,7);
    let emailValidation = await AccountCredentials.findOne( {where: {email: req.body.email}});
    if (emailValidation){
        return res.status(401).send({"message":"El correo ingresado ya posee una cuenta activa"})
    }
    let usernameValidation = await AccountCredentials.findOne( {where: {username: req.body.username}});
    if (usernameValidation){
        return res.status(401).send({"message":"El username ingresado ya posee una cuenta activa"})
    }
    
    try{
        const newUser = await AccountCredentials.create({
            "email": req.body.email,
            "password": req.body.password,
            "username": req.body.username, 
        });
        if (newUser){
            const newClient = await Client.create({
                "name": req.body.name,
                "addres": req.body.addres,
                "phone": req.body.phone,
                "accountId": newUser.id
            });
            if (newClient){
                return res.status(200).send({message: "Usuario creado exitosamente"})
            }
        }
        return res.status(401).send({message: "No se pudo crear el usuario"});
    } catch (error){ 
        return res.status(401).send({message:"No se pudo crear el nuevo usuario"})      
    }

    
    
});
module.exports = router;






